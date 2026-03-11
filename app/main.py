from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# THE CONNECTOR: This allows your browser to talk to your Python server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_methods=["*"],
    allow_headers=["*"],
)

# This defines the "shape" of the data you expect from the F&B sensors
class SensorData(BaseModel):
    machine_name: str
    temperature: float

@app.get("/")
def health_check():
    return {"message": "Backend is running!"}

@app.post("/test-connection")
async def test_connect(data: SensorData):
    print(f"Received data from: {data.machine_name}")
    return {
        "status": "Success",
        "message": f"Connector established for {data.machine_name}",
        "received_temp": data.temperature
    }