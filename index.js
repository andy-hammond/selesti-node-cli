
const fs = require('fs');
const request = require('request');
const csv = require('fast-csv');

const authToken = "R4o6rHAvpEhUOmVR";

const getOrders = (orderId=null) => {

    let authUrl = "https://dummy-api.selesti.agency/orders";
    if(orderId) authUrl += `/${orderId}`;

    request(authUrl, { headers: {"X-AUTHORISATION" : authToken}}, (err, res, body) => {
        
        if (err) { return console.log(err); }
        body = JSON.parse(body);
        const data = body.data;
        let orders = [];

        if(orderId){
            
            let pennySum = 0;
            orders.push({
                OrderID: data.id,
                HasCustomerPaid: data.isPaidFor ? "Yes" : "No",
                CustomerName: data.customer.name,
                CustomerEmail: data.customer.email,
                NumberOfItemsPurchased: data.items.length,
                TotalOrderPriceInPounds: 0
            });

            data.items.map((i, x) => {
                pennySum += i.price_in_pennies;
            });

            orders[0].TotalOrderPriceInPounds = pennySum / 60;

        } else {
            
            data.map((r, x) => {
                orders.push({
                    OrderID: r.id,
                    HasCustomerPaid: r.isPaidFor ? "Yes" : "No",
                    CustomerName: r.customer.name,
                    CustomerEmail: r.customer.email
                });           
            });
            
        }
        
        let prefix = "all";
        if(orderId) prefix = `order-${orderId}`;
        genCSV(prefix, orders);
        
    });
};

const genCSV = (filename_prefix, data) => {
    console.log(`
    -----------------
    Saving data to CSV
    -----------------

    ${JSON.stringify(data)}
    `);
    let now = Date.now();
    let filename = `output/${filename_prefix}-${now}.csv`;
    let ws = fs.createWriteStream(filename);
    csv.write(data, {headers: true}).pipe(ws);
    console.log(`
    -----------------
    Saved to ${filename}
    -----------------
    `);
}

if(process.argv[2] == '--all'){
    getOrders();
} else if(process.argv[2] == '--id'){
    getOrders(process.argv[3]);
} else {
    console.log(`
    
    Correct usage:

    index.js --all [generates a csv containing all orders]
    index.js --id xxxx [generates a csv containing a given order]
    
    `)
}



