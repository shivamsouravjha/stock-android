# stock-andorid

* This project is the android app of [StockSight](https://stocksight.online/)

* There are two curls majorly
```
curl 'https://stock-backend-hz83.onrender.com/api/uploadXlsx' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundaryna0Ni4LP8fooYZgU' \
  -H 'origin: http://localhost:5173' \
  -H 'priority: u=1, i' \
  -H 'referer: http://localhost:5173/' \
  -H 'sec-ch-ua: "Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36' \
  --data-raw $'------WebKitFormBoundaryna0Ni4LP8fooYZgU\r\nContent-Disposition: form-data; name="files"; filename="TS.xlsx"\r\nContent-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\r\n\r\n\r\n------WebKitFormBoundaryna0Ni4LP8fooYZgU--\r\n'
```

which uploads the xlsx file.

* Google signin where we hit google apis and get the oauth token and send it to backend
```
curl 'https://stock-backend-hz83.onrender.com/api/fetchGmail' \
  -H 'accept: */*' \
  -H 'accept-language: en-GB,en-US;q=0.9,en;q=0.8' \
  -H 'content-type: application/x-www-form-urlencoded' \
  -H 'origin: http://localhost:5173' \
  -H 'priority: u=1, i' \
  -H 'referer: http://localhost:5173/' \
  -H 'sec-ch-ua: "Google Chrome";v="129", "Not=A?Brand";v="8", "Chromium";v="129"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "macOS"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: cross-site' \
  -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36' \
  --data-raw 'token=<token>'
```


The response of both is a stream of data.
