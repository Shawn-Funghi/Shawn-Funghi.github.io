import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class HttpConnectionTest {
    public static void main(String args[])
    {
        try {
        	 String str = "{\"學號\":\"S007\",\"姓名\":\"琨哥的學生2.0\",\"國文\":\"50\",\"英文\":\"60\",\"數學\":\"200\"}";
             JSONObject obj = new JSONObject(str);
                System.out.println(obj);
            // 建立url資源
            URL url = new URL("https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/student/AAATt8AAAAAAATXAAB");
            // 建立http連線
            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            // 設定允許輸出
            conn.setDoOutput(true);

            conn.setDoInput(true);

            // 設定不用快取
            conn.setUseCaches(false);
            // 設定傳遞方式
            conn.setRequestMethod("PUT");
            // 設定維持長連線
            conn.setRequestProperty("Connection", "Keep-Alive");
            // 設定檔案字符集:
            conn.setRequestProperty("Charset", "UTF-8");
            //轉換為位元組陣列
            byte[] data = (obj.toString()).getBytes();
            // 設定檔案長度
            conn.setRequestProperty("Content-Length", String.valueOf(data.length));

            // 設定檔案型別:
            conn.setRequestProperty("Content-Type", "application/json");


            // 開始連線請求
            conn.connect();
            OutputStream  out = conn.getOutputStream();     
            // 寫入請求的字串
            out.write((obj.toString()).getBytes());
            out.flush();
            out.close();

            System.out.println(conn.getResponseCode());

            // 請求返回的狀態
            if (conn.getResponseCode() == 200) {
                System.out.println("連線成功");
                // 請求返回的資料
                InputStream in = conn.getInputStream();
                String a = null;
                try {
                    byte[] data1 = new byte[in.available()];
                    in.read(data1);
                    // 轉成字串
                    a = new String(data1);
                    System.out.println(a);
                } catch (Exception e1) {
                    // TODO Auto-generated catch block
                    e1.printStackTrace();
                }
            } else {
                System.out.println("no++");
            }

        } catch (Exception e) {

        }

    }
}