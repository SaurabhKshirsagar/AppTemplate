FROM saurabhparagyte/runtimeappbase:v2

RUN mkdir "/home/app" 

COPY "package.json" "$app"

COPY ".babelrc" "$app" 

COPY "index.android.js" "$app" 

COPY "index.html" "$app" 

COPY "webpack.config.js" "$app"

COPY "vendor.webpack.config.js" "$app"

COPY "client" "$app/client"

COPY "server" "$app/server"

COPY "android" "$app/android"

COPY "ios" "$app/ios"

COPY ".p10" "$app/.p10"

WORKDIR "$app"

RUN npm install --dev

# && \
#  npm install extract-text-webpack-plugin && \
#  npm install webpack-hot-middleware && \
#  npm install html-webpack-plugin && \
#  npm install babel-loader babel-core && \
#  npm install babel-preset-es2015 && \
#  npm install babel-preset-stage-2 && \
#  npm install babel-preset-react && \
#  npm install style-loader && \
#  npm install file-loader && \
#  npm install url-loader && \
#  npm install css-loader 

EXPOSE 8091 8081

CMD ["npm", "run", "webstart"]

