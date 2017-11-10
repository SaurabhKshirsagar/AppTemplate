# ############# Appbase ############
# FROM saurabhparagyte/rnubuntu:v1

# ENV NODE_ENV=production app="/home/app"

# RUN apt-get update

# RUN apt-get install git

# RUN npm install -g webpack

# RUN mkdir "/home/app" 

# COPY "package.json" "$app"

# COPY ".babelrc" "$app" 

# WORKDIR "$app"

# RUN npm install --dev
# #################################




############# App ############
FROM saurabhparagyte/appbase:v2

COPY "index.android.js" "$app" 

COPY "index.html" "$app" 

COPY "webpack.config.js" "$app"

COPY "vendor.webpack.config.js" "$app"

COPY "android" "$app/android"

COPY "ios" "$app/ios"

COPY ".p10" "$app/.p10"

COPY "client" "$app/client"

COPY "server" "$app/server"

EXPOSE 8091 8081

CMD ["npm", "run", "webstart"]


