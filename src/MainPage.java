import java.awt.EventQueue;

import javax.swing.JFrame;
import javax.swing.JButton;
import javax.swing.JLabel;
import java.awt.Color;
import java.awt.Font;
import javax.swing.JTextField;
import javax.swing.SwingConstants;

import org.json.JSONArray;
import org.json.JSONObject;

import edu.ntu.net.http.HttpsConnect;

import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;

public class MainPage {

	private JFrame frame1;
	private JButton btnUploadStatics;
	private JLabel lbApple;
	private JLabel lbOrange;
	private JLabel lbBanana;
	private JLabel lbWatermelon;
	private JLabel lbAppleRemain;
	private JLabel lbOrangeRemain;
	private JLabel lbBananaRemain;
	private JLabel lbWatermelonRemain;
	private JLabel lbExeption;
	private JTextField txfOrange;
	private JTextField txfWatermelon;
	private JTextField txfBanana;
	private JTextField txfApple;
	private JTextField txfBuyer;
	private JTextField txfPhone;
	private JTextField txfAddress;
	private JTextField txfMonth;
	private JTextField txfDate;
	private JLabel lbApplePrice;
	private JLabel lbOrangePrice;
	private JLabel lbBananaPrice;
	private JLabel lbWatermelonPrice;
	private String Buyer;
	private String Phone;
	private String Address;
	private int Month;
	private int Date;
	private JLabel lbExeption_1;
	private int AppleNumber;
	private int BananaNumber;
	private int OrangeNumber;
	private int WatermelonNumber;
	private int ApplePrice;
	private int BananaPrice;
	private int OrangePrice;
	private int WatermelonPrice;
	private int AppleRemain;
	private int BananaRemain;
	private int OrangeRemain;
	private int WatermelonRemain;
	private String WatermelonUrl = "https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/pricelist/AAAUCjAAAAAAAT7AAB";
	private String AppleUrl = "https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/pricelist/AAAUCjAAAAAAAT9AAA";
	private String OrangeUrl = "https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/pricelist/AAAUCjAAAAAAAT9AAD";
	private String BananaUrl = "https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/pricelist/AAAUCjAAAAAAAT9AAB";

	/**
	 * Launch the application.
	 */
	public static void main(String[] args) {
		EventQueue.invokeLater(new Runnable() {
			public void run() {
				try {
					MainPage window = new MainPage();
					window.frame1.setVisible(true);
				} catch (Exception e) {
					e.printStackTrace();
				}
			}
		});
	}

	/**
	 * Create the application.
	 */
	public MainPage() {
		initialize();
	}

	/**
	 * Initialize the contents of the frame.
	 */
	private void initialize() {
		this.frame1 = new JFrame();
		this.frame1.setBounds(100, 100, 611, 435);
		this.frame1.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame1.getContentPane().setLayout(null);

		JButton btnUploadStatics = new JButton("重新載入數據");
		btnUploadStatics.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				reloadStatic();
			}
		});
		btnUploadStatics.setBounds(10, 255, 120, 43);
		this.frame1.getContentPane().add(btnUploadStatics);

		this.lbApple = new JLabel("蘋果");
		lbApple.setFont(new Font("新細明體", Font.PLAIN, 24));
		lbApple.setSize(61, 35);
		lbApple.setLocation(147, 139);
		this.frame1.getContentPane().add(lbApple);

		this.lbBanana = new JLabel("香蕉");
		lbBanana.setFont(new Font("新細明體", Font.PLAIN, 24));
		lbBanana.setLocation(147, 17);
		lbBanana.setSize(61, 29);
		this.frame1.getContentPane().add(lbBanana);

		this.lbOrange = new JLabel("橘子");
		lbOrange.setFont(new Font("新細明體", Font.PLAIN, 24));
		lbOrange.setLocation(10, 10);
		lbOrange.setSize(48, 43);

		this.frame1.getContentPane().add(lbOrange);

		this.lbWatermelon = new JLabel("西瓜");
		lbWatermelon.setFont(new Font("新細明體", Font.PLAIN, 24));
		lbWatermelon.setLocation(10, 139);
		lbWatermelon.setSize(53, 35);

		this.frame1.getContentPane().add(lbWatermelon);

		this.lbAppleRemain = new JLabel("0個");
		lbAppleRemain.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbAppleRemain.setLocation(147, 170);
		lbAppleRemain.setSize(142, 29);

		this.frame1.getContentPane().add(lbAppleRemain);

		this.lbBananaRemain = new JLabel("0個");
		lbBananaRemain.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbBananaRemain.setLocation(147, 43);
		lbBananaRemain.setSize(127, 35);
		this.frame1.getContentPane().add(lbBananaRemain);

		this.lbOrangeRemain = new JLabel("0個");
		lbOrangeRemain.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbOrangeRemain.setLocation(10, 43);
		lbOrangeRemain.setSize(134, 35);
		this.frame1.getContentPane().add(lbOrangeRemain);

		this.lbWatermelonRemain = new JLabel("0個");
		lbWatermelonRemain.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbWatermelonRemain.setLocation(10, 168);
		lbWatermelonRemain.setSize(134, 33);
		this.frame1.getContentPane().add(lbWatermelonRemain);

		txfOrange = new JTextField();
		txfOrange.setHorizontalAlignment(SwingConstants.RIGHT);
		txfOrange.setBounds(68, 23, 76, 21);
		frame1.getContentPane().add(txfOrange);
		txfOrange.setColumns(10);

		txfWatermelon = new JTextField();
		txfWatermelon.setHorizontalAlignment(SwingConstants.RIGHT);
		txfWatermelon.setColumns(10);
		txfWatermelon.setBounds(68, 148, 76, 21);
		frame1.getContentPane().add(txfWatermelon);

		txfBanana = new JTextField();
		txfBanana.setHorizontalAlignment(SwingConstants.RIGHT);
		txfBanana.setColumns(10);
		txfBanana.setBounds(198, 23, 76, 21);
		frame1.getContentPane().add(txfBanana);

		txfApple = new JTextField();
		txfApple.setHorizontalAlignment(SwingConstants.RIGHT);
		txfApple.setColumns(10);
		txfApple.setBounds(198, 148, 76, 21);
		frame1.getContentPane().add(txfApple);

		txfBuyer = new JTextField();
		txfBuyer.setHorizontalAlignment(SwingConstants.RIGHT);
		txfBuyer.setBounds(343, 23, 76, 21);
		frame1.getContentPane().add(txfBuyer);
		txfBuyer.setColumns(10);

		txfPhone = new JTextField();
		txfPhone.setHorizontalAlignment(SwingConstants.RIGHT);
		txfPhone.setColumns(10);
		txfPhone.setBounds(343, 57, 76, 21);
		frame1.getContentPane().add(txfPhone);

		txfAddress = new JTextField();
		txfAddress.setHorizontalAlignment(SwingConstants.RIGHT);
		txfAddress.setColumns(10);
		txfAddress.setBounds(343, 97, 76, 21);
		frame1.getContentPane().add(txfAddress);

		txfMonth = new JTextField();
		txfMonth.setHorizontalAlignment(SwingConstants.RIGHT);
		txfMonth.setColumns(10);
		txfMonth.setBounds(343, 140, 48, 21);
		frame1.getContentPane().add(txfMonth);

		JButton btnPurchase = new JButton("購買");
		btnPurchase.addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				btnPurchase_click();
			}
		});
		btnPurchase.setBounds(154, 255, 120, 43);
		frame1.getContentPane().add(btnPurchase);

		JLabel lbBuyer = new JLabel("輸入姓名");
		lbBuyer.setBounds(429, 23, 82, 20);
		frame1.getContentPane().add(lbBuyer);

		JLabel lbPhone = new JLabel("輸入電話");
		lbPhone.setBounds(429, 55, 82, 20);
		frame1.getContentPane().add(lbPhone);

		JLabel lbAddress = new JLabel("輸入地址");
		lbAddress.setBounds(429, 100, 82, 20);
		frame1.getContentPane().add(lbAddress);

		JLabel lbDay = new JLabel("輸入運送日期");
		lbDay.setBounds(343, 180, 82, 21);
		frame1.getContentPane().add(lbDay);

		JLabel lbMonth = new JLabel("月");
		lbMonth.setBounds(403, 143, 28, 15);
		frame1.getContentPane().add(lbMonth);

		txfDate = new JTextField();
		txfDate.setColumns(10);
		txfDate.setBounds(429, 140, 48, 21);
		frame1.getContentPane().add(txfDate);

		JLabel lbDate = new JLabel("日");
		lbDate.setBounds(489, 143, 19, 15);
		frame1.getContentPane().add(lbDate);

		lbExeption = new JLabel("等待中");
		lbExeption.setFont(new Font("新細明體", Font.PLAIN, 24));
		lbExeption.setBounds(16, 293, 258, 93);
		frame1.getContentPane().add(lbExeption);

		lbOrangePrice = new JLabel("0元");
		lbOrangePrice.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbOrangePrice.setBounds(10, 88, 134, 35);
		frame1.getContentPane().add(lbOrangePrice);

		lbBananaPrice = new JLabel("0元");
		lbBananaPrice.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbBananaPrice.setBounds(147, 88, 127, 35);
		frame1.getContentPane().add(lbBananaPrice);

		lbWatermelonPrice = new JLabel("0元");
		lbWatermelonPrice.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbWatermelonPrice.setBounds(10, 203, 134, 35);
		frame1.getContentPane().add(lbWatermelonPrice);

		lbApplePrice = new JLabel("0元");
		lbApplePrice.setFont(new Font("新細明體", Font.PLAIN, 12));
		lbApplePrice.setBounds(147, 203, 127, 35);
		frame1.getContentPane().add(lbApplePrice);

		lbExeption_1 = new JLabel("等待中");
		lbExeption_1.setFont(new Font("新細明體", Font.PLAIN, 24));
		lbExeption_1.setBounds(308, 213, 258, 148);
		frame1.getContentPane().add(lbExeption_1);
		Query();
	}

	protected void btnPurchase_click() {

		try {
			if (this.AppleNumber > 0 || this.BananaNumber > 0 || this.OrangeNumber > 0 || this.WatermelonNumber > 0) {
				// 獲取訂購數量
				this.AppleNumber = Integer.parseInt(this.txfApple.getText());
				this.BananaNumber = Integer.parseInt(this.txfBanana.getText());
				this.OrangeNumber = Integer.parseInt(this.txfOrange.getText());
				this.WatermelonNumber = Integer.parseInt(this.txfWatermelon.getText());
				// 計算扣除數量
				int AppleCalc = this.AppleRemain - this.AppleNumber;
				int OrangeCalc = this.OrangeRemain - this.OrangeNumber;
				int BananaCalc = this.BananaRemain - this.BananaNumber;
				int WatermelonCalc = this.WatermelonRemain - this.WatermelonNumber;
				
					
				
			}else {
				System.out.println("請輸入正數");
			}
		} catch (NumberFormatException e) {
			System.out.println("請輸入數字");
		}
		// 獲取當前價格
		this.ApplePrice = Integer.parseInt(this.lbApplePrice.getText());
		this.BananaPrice = Integer.parseInt(this.lbBananaPrice.getText());
		this.OrangePrice = Integer.parseInt(this.lbOrangePrice.getText());
		this.WatermelonPrice = Integer.parseInt(this.lbWatermelonPrice.getText());
		// 獲取剩餘數量
		this.AppleRemain = Integer.parseInt(this.lbAppleRemain.getText());
		this.BananaRemain = Integer.parseInt(this.lbBananaRemain.getText());
		this.OrangeRemain = Integer.parseInt(this.lbOrangeRemain.getText());
		this.WatermelonRemain = Integer.parseInt(this.lbWatermelonRemain.getText());
		
	
		String JSONWatermelon = "{\"名稱\":\"西瓜\",\"價格\":\"" + this.WatermelonPrice + "\",\"數量\":\"" + WatermelonCalc
				+ "\"}";
		String JSONApple = "{\"名稱\":\"蘋果\",\"價格\":\"" + this.ApplePrice + "\",\"數量\":\"" + AppleCalc + "\"}";
		String JSONOrange = "{\"名稱\":\"橘子\",\"價格\":\"" + this.OrangePrice + "\",\"數量\":\"" + OrangeCalc + "\"}";
		String JSONBanana = "{\"名稱\":\"香蕉\",\"價格\":\"" + this.BananaPrice + "\",\"數量\":\"" + BananaCalc + "\"}";
		JSONObject jsonWatermelon = new JSONObject(JSONWatermelon);
		JSONObject jsonApple = new JSONObject(JSONApple);
		JSONObject jsonOrange = new JSONObject(JSONOrange);
		JSONObject jsonBanana = new JSONObject(JSONBanana);
		Put(jsonWatermelon, this.WatermelonUrl);
		Put(jsonApple, this.AppleUrl);
		Put(jsonOrange, this.OrangeUrl);
		Put(jsonBanana, this.BananaUrl);
		this.Buyer = this.txfBuyer.getText();
		this.Phone = this.txfPhone.getText();
		this.Address = this.txfAddress.getText();
		this.Month = Integer.parseInt(this.txfMonth.getText());
		this.Date = Integer.parseInt(this.txfDate.getText());
		String Order = "{\"購買者\":\"" + this.Buyer + "\",\"電話\":\"" + this.Phone + "\",\"地址\":\"" + this.Address
				+ "\",\"月\":\"" + this.Month + "\",\"日\":\"" + this.Date + "\"}";
		JSONObject jsonOrder = new JSONObject(Order);
		Post(jsonOrder);

	}

	protected void reloadStatic() {
		this.Query();
	}

	public void Query() {
		try {
			String url = "https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/pricelist/";
			HttpsConnect conn = new HttpsConnect(url);
			JSONObject obj = conn.getJSONObject();
			JSONArray items = obj.getJSONArray("items");
			for (int i = 0; i < items.length(); i++) {
				String itemsName = items.getJSONObject(i).getString("名稱");
				String itemsPrice = items.getJSONObject(i).getInt("價格") + "";
				String itemsRemain = items.getJSONObject(i).getInt("數量") + "";
				switch (itemsName) {
				case "蘋果":
					this.lbApplePrice.setText(itemsPrice);
					this.lbAppleRemain.setText(itemsRemain);
					break;
				case "橘子":
					this.lbOrangePrice.setText(itemsPrice);
					this.lbOrangeRemain.setText(itemsRemain);
					break;
				case "香蕉":
					this.lbBananaPrice.setText(itemsPrice);
					this.lbBananaRemain.setText(itemsRemain);
					break;
				case "西瓜":
					this.lbWatermelonPrice.setText(itemsPrice);
					this.lbWatermelonRemain.setText(itemsRemain);
					break;
				default:
					break;
				}

			}
		} catch (Exception e) {
			this.lbExeption.setText("無法連上網站，請確認連網");
			System.out.println("無法連上網站，" + e.getMessage());
		}
	}

	public void Put(JSONObject obj, String u) {
		try {
			// 建立url資源
			URL url = new URL(u);// 建立http連線
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
			// 轉換為位元組陣列
			byte[] data = (obj.toString()).getBytes();
			// 設定檔案長度
			conn.setRequestProperty("Content-Length", String.valueOf(data.length));

			// 設定檔案型別:
			conn.setRequestProperty("Content-Type", "application/json");

			// 開始連線請求
			conn.connect();
			OutputStream out = conn.getOutputStream();
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

	public void Post(JSONObject obj) {
		try {
			// 建立url資源
			URL url = new URL(
					"https://g49a8407c743283-db202106220025.adb.ap-tokyo-1.oraclecloudapps.com/ords/admin/%E8%A8%82%E5%96%AE/");// 建立http連線
			HttpURLConnection conn = (HttpURLConnection) url.openConnection();
			// 設定允許輸出
			conn.setDoOutput(true);

			conn.setDoInput(true);

			// 設定不用快取
			conn.setUseCaches(false);
			// 設定傳遞方式
			conn.setRequestMethod("POST");
			// 設定維持長連線
			conn.setRequestProperty("Connection", "Keep-Alive");
			// 設定檔案字符集:
			conn.setRequestProperty("Charset", "UTF-8");
			// 轉換為位元組陣列
			byte[] data = (obj.toString()).getBytes();
			// 設定檔案長度
			conn.setRequestProperty("Content-Length", String.valueOf(data.length));

			// 設定檔案型別:
			conn.setRequestProperty("Content-Type", "application/json");

			// 開始連線請求
			conn.connect();
			OutputStream out = conn.getOutputStream();
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
