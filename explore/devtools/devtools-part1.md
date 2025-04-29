# 1. What is the name of the new json file?
The name of the new json file is `citylots.json`

# 2. Which file initiated the download of the new file?
Under DevTools, by clicking on `citylots.json` and going under the `initiator` tab we see that under the `Request call stack` it says "`fetchData @ expose.js:4`". This tells us that **`expose.js`** initiated the download of the new file.

# 3. What is the file size of the downloaded file? (Hint: you can find this in the network tab, or the response headers)
The file size of the downloaded file (according to the network tab) is `(disk cache)`, and when you hover over this value, it reads **11.7 MB**

# 4. How long did it take to download?
According to the network tab's rightmost column, it took **74ms** to download

# 5. What was your User-Agent for the browser that made the request?
After clicking on the downloaded file (under DevTools) going to the `Headers` tab and scrolling down to `Request Headers` I learned that the User-Agent for the browser that made the request is **Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36**

# 6. In the response header, what type of server did it come from?
In the response header, the type of serve it came from was **GitHub.com**.

# 7. When was the file last modified?
The file was last modified on **Thu, 15 Sep 2022 22:44:30 GMT**, according to the `response header` as well.

# 8. What was the Content-Type of the file?
The content-type of the file is **application/json; charset=utf-8**, according to the `response header` as well.

# 9. Which function inside the initiating file made the request?
The function **`fetchData()`** inside the initiating file `(expose.js)` made the request. This was by clicking on the `expose.js` link under the `initiator` tab.
