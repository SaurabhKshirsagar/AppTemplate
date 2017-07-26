FROM saurabhparagyte/appbase:v1

COPY "index.android.js" "$app" 

COPY "index.html" "$app" 

COPY "webpack.config.js" "$app"

COPY "vendor.webpack.config.js" "$app"

COPY "android" "$app/android"

COPY "ios" "$app/ios"

COPY ".p10" "$app/.p10"

COPY "client" "$app/client"

COPY "server" "$app/server"

CMD ["npm", "run", "webstart"]


