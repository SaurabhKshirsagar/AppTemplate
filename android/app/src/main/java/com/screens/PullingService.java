package com.screens;



import android.app.AlarmManager;

import android.app.NotificationManager;
import android.app.PendingIntent;
import android.app.Service;
import android.media.RingtoneManager;
import android.net.Uri;
import android.os.AsyncTask;
import android.os.IBinder;

import android.support.annotation.Nullable;
import android.support.v4.app.NotificationCompat;
import android.widget.Toast;
import android.content.Context;
import android.content.Intent;

import android.util.Log;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.Timer;
import java.util.TimerTask;


import com.github.nkzawa.socketio.client.IO;
import com.github.nkzawa.socketio.client.Socket;
import com.github.nkzawa.emitter.Emitter;


import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;



public class PullingService extends Service {

    private AlarmManager alarmMgr;
    private ArrayList<String> notificationIDArray;

    public Timer time=new Timer();
    public String token= "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2F1dGguYml0cG9kLmlvL2F1dGgiLCJhdWQiOiJodHRwczovL2F1dGguYml0cG9kLmlvL2F1dGgvcmVzb3VyY2VzIiwiZXhwIjoxNDg0ODA0NTYzLCJuYmYiOjE0ODQ3MTgxNjMsImNsaWVudF9pZCI6IkU3bHdFOGU4cFRtelVPRVlPc05NZjE1TW1LSXFxUi9DL1kyRTZLNmtGdEU9Iiwic2NvcGUiOlsicHJvZmlsZSIsIm9wZW5pZCIsImVtYWlsIl0sInN1YiI6IjQ5MSIsImF1dGhfdGltZSI6MTQ4NDcxODE2MCwiaWRwIjoicDEwT0F1dGgiLCJhbXIiOlsicDEwT0F1dGgiXX0.Ya9lq9hYqS6pCrgjMjXezCgxm4BEv6IzTJiygC6CNYC3y-DgzjKAAi3uLRWAtuSsnAXmoUdW1nSeNZbPhM29DUwPpVe4wizCZW2uH-orTXCTTC6yuCRo4TytBLlGA1jKW6C-mVjXjTiyMKFD6gIAmdx6YNd7gnSu0itgcCMJakFaCYUL97LIWJ6mI-qQ8ffN_UYH21YRCQoXuA_mBW739junXi16X1mHPv2p9p0IKzRW6fE6S2Rk2XkLWmYgyEt9SlB4BSb5Tb-lWXQ-RIntcg63QEfMgMhAj0rVgnMHcrhQTkspc-J6JGJHiJd70Y_N1keK9FNBwAfMBXKJGymWdA";
    public Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.1.109:8082?token="+token);
        } catch (URISyntaxException e) {}
    }
    public PullingService(){
        this("PullingService");
    }

    private class PostReadNotification extends AsyncTask{

        @Override
        protected Object doInBackground(Object[] params) {
            try {

                JSONArray notificationIDArrayJSON = new JSONArray(Arrays.asList(notificationIDArray));
                makePostRequest("http://35.185.63.253:8080/notifications/read/",notificationIDArrayJSON,getApplicationContext());
            } catch (Exception e) {
                e.printStackTrace();
            }
            return null;
        }
    }

    public PullingService(String name) {
        mSocket.connect();
        notificationIDArray=new ArrayList<String>() ;
        mSocket.on("notification", new Emitter.Listener()
        {
            @Override
            public void call(Object... args) {
                try {
                    JSONObject data = (JSONObject) args[0];
                    JSONObject messages  = data.getJSONObject("messages");
                    Iterator<String> iter = messages.keys();
                    int i=0;
                    while (iter.hasNext()) {

                        String key = iter.next();
                        try {

                            if(MainActivity.isInForeground())
                            {

                            }else {
                                JSONObject messageObj  = messages.getJSONObject(key);
                                JSONObject msg  = messageObj.getJSONObject("message");
                                String notificationId  = messageObj.getString("id");
                                String message  = msg.getString("message");
                                String title  = msg.getString("title");
                                notificationIDArray.add(notificationId);
                                sendNotification(i, message, title);
                            }
                            i++;
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                    }
                } catch (JSONException e) {
                    e.printStackTrace();

                }
                finally{
                    if(!notificationIDArray.isEmpty()){
                       // new PostReadNotification().execute();
                    }
                }
            }

        });

        // TODO Auto-generated constructor stub
    }



    @Override
    public int onStartCommand(Intent intent, int flags, int startId) {

        time.schedule(new TimerTask() {
            @Override
            public void run() {
            }
        },0L, 10000L);

        return super.onStartCommand(intent, flags, startId);
    }

    @Nullable
    @Override
    public IBinder onBind(Intent intent) {
        return null;
    }

    @Override
    public void onCreate() {
        Toast.makeText(this, "Service Created", Toast.LENGTH_LONG).show();
    }

    private void sendNotification(int notificationID,String message,String title) {
        Intent intent = new Intent(this, MainActivity.class);
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        PendingIntent pendingIntent = PendingIntent.getActivity(this, 0 , intent,
                PendingIntent.FLAG_ONE_SHOT);

        Uri defaultSoundUri= RingtoneManager.getDefaultUri(RingtoneManager.TYPE_NOTIFICATION);
        NotificationCompat.Builder notificationBuilder = new NotificationCompat.Builder(this)
                .setSmallIcon(17301620)
                .setContentTitle(title)
                .setContentText(message)
                .setAutoCancel(true)
                .setSound(defaultSoundUri)
                .setContentIntent(pendingIntent);


        NotificationManager notificationManager =
                (NotificationManager) getSystemService(Context.NOTIFICATION_SERVICE);

        notificationManager.notify(notificationID, notificationBuilder.build());
    }

    public static String makePostRequest(String stringUrl, JSONArray notificationIDArray, Context context) throws IOException, JSONException {

        URL url = new URL(stringUrl);
        HttpURLConnection conn;

        conn = (HttpURLConnection) url.openConnection();
        conn.setConnectTimeout(30000);
        conn.setReadTimeout(30000);
        conn.setRequestMethod("POST");
        //x-www-form-urlencoded
        conn.setRequestProperty("Content-Type", "application/json");
        conn.setRequestProperty("Authorization", "sss");
        conn.setDoInput(true);

        OutputStreamWriter wr = new OutputStreamWriter(conn.getOutputStream());
        wr.write(notificationIDArray.get(0).toString());
        wr.close();

        Log.d("TimeOut", "TimeOut");
        BufferedReader br = new BufferedReader(new InputStreamReader(conn.getInputStream()));
        String result = br.readLine();
        Log.d("result", "Result : " + result);
        int responceCode = conn.getResponseCode();
        conn.disconnect();
        return "";
    }


}
