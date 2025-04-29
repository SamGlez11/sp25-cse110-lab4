# 1. What is the name of the new json file?
The name of the new json file is `citylots.json`

# 2. Which file initiated the download of the new file?
Under DevTools, by clicking on `citylots.json` and going under the `initiator` tab we see that under the `Request call stack` it says "`fetchData @ expose.js:4`". This tells us that **`expose.js`** initiated the download of the new file.

# 3. What is the file size of the downloaded file? (Hint: you can find this in the network tab, or the response headers)
The file size of the downloaded file (according to the network tab) is `(disk cache)`, and when you hover over this value, it reads **11.7 MB**

# 4. How long did it take to download?
According to the network tab's rightmost column, it took **74ms** to download
