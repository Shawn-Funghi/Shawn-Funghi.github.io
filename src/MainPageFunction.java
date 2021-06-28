import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class MainPageFunction {
	public static void main(String args[]) {
		Get();
	}
	public static void Get(){
		try {
			URL url = new URL("https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/pricelist/");
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();// 建立http連線
			conn.setDoOutput(true);// 設定允許輸出
			conn.setDoInput(true);
			conn.setUseCaches(false);// 設定不用快取
			conn.setRequestMethod("GET");// 設定傳遞方式
			conn.setRequestProperty("Connection", "Keep-Alive");// 設定維持長連線
			conn.setRequestProperty("Charset", "UTF-8");// 設定檔案字符集:
			//byte[] data = (obj.toString()).getBytes();// 轉換為位元組陣列
			// conn.setRequestProperty("Content-Length", String.valueOf(data.length));// 設定檔案長度
			// conn.setRequestProperty("contentType", "application/json");// 設定檔案型別:
			conn.connect();// 開始連線請求
			// OutputStream out = conn.getOutputStream();
			// out.write((obj.toString()).getBytes());// 寫入請求的字串
			// out.flush();
			// out.close();
			System.out.println(conn.getResponseCode());
			// 請求返回的狀態
			if (conn.getResponseCode() == 200) {
				System.out.println("連線成功");
				InputStream in = conn.getInputStream();// 請求返回的資料
				String a = null;
				try {
					byte[] data1 = new byte[in.available()];
					in.read(data1);// 轉成字串
					a = new String(data1);
					JSONObject out = new JSONObject(a);
					JSONArray items = out.getJSONArray("items");
					for(int i = 0; i < items.length(); i++) {
						String itemsName = items.getJSONObject(i).getString("名稱");
						String itemsPrice = items.getJSONObject(i).getInt("價格") + "";
						String itemsRemain = items.getJSONObject(i).getInt("數量") + "";
						System.out.println("名稱:"+itemsName+"價格:"+itemsPrice+"數量:"+itemsRemain);
					}
					
				} catch (Exception e1) {
					e1.printStackTrace();
				}
			} else {
				System.out.println("no++");
			}
		} catch (Exception e) {

		}
	}
}