import pandas as pd

ds = pd.read_csv('Data/cleaned_cafe_sales.csv')

# Search for mode except unknown
mode_payment = ds[ds['Payment Method'] != 'Unknown']['Payment Method'].mode()[0]
mode_location = ds[ds['Location'] != 'Unknown']['Location'].mode()[0]
mode_date     = ds[ds['Transaction Date'] != 'Unknown']['Transaction Date'].mode()[0]

# Replace unknown with mode
ds['Payment Method'] = ds['Payment Method'].replace('Unknown', mode_payment)
ds['Location']       = ds['Location'].replace('Unknown', mode_location)
ds['Transaction Date'] = ds['Transaction Date'].replace('Unknown', mode_date)

# Change them into integer
ds['Location'] = ds['Location'].astype('category').cat.codes
ds['Item'] = ds['Item'].astype('category').cat.codes
ds['Payment Method'] = ds['Payment Method'].astype('category').cat.codes

# Key mapping
#0	Cake            Cash                In-store
#1	Cake/Juice      Credit Card         Takeaway
#2	Coffee          Digital Wallet
#3	Cookie
#4	Juice
#5	Salad
#6	Sandwich
#7	Sandwich/Smoothie
#8	Smoothie
#9	Tea

ds.drop('Transaction ID', axis=1, inplace=True)

ds.to_csv('Data/DataReady.csv', index=False)
