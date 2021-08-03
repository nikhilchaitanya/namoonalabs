var json = {
    "jsonData": [
        {
            "Email": "nikhilchaitanya01@gmail.com"
        },
        {
            "Email": "nikhilc.freelance@gmail.com"
        },
        {
            "Email": "designforspeed@gmail.com"
        },
        {
            "Email": "thelightray001@gmail.com"
        } 
    ]
}

for (var sheet in json.jsonData) {
    for (var data in json.jsonData[sheet]) {
        console.log(json.jsonData[sheet][data])
    }
}

/*
for (var i=0; i<json.jsonData.length; i++) {
    for (var key in json.jsonData[i]) {
        for (var j= 0; j<json.jsonData[i][key].length; j++) {
            console.log(json.jsonData[i][key][j])
        }
    }
 }
 */