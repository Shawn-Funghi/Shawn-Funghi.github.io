package edu.ntu.net.http;

import java.io.BufferedReader;

import org.json.JSONObject;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;

public class HttpsConnect {
//	 private Document doc;
//	 private JSONObject obj;
	 private String strHTML;
	 public HttpsConnect(String url) throws Exception {
		 this(url, HttpMethod.HTTP_METHOD_GET,"");
	 }
	 
	 public HttpsConnect(String url, boolean httpMethod) throws Exception {
		 this(url, httpMethod, "");
	 }
	 
	 public HttpsConnect(String url, boolean httpMethod, String cookies) throws Exception {
		 HttpsReader https = new HttpsReader();
	        https.root = url;
	        BufferedReader buf = https.readyBuffer(cookies, httpMethod);
	        String line = null;
	        String strHTML = "";
	        while ((line = buf.readLine()) != null) {
	        	strHTML += line;
	        }
	        this.strHTML = strHTML;
	 }
	 
	    public Document getDocument(){
//	    	this.doc = Jsoup.parse(this.strHTML);
	        return Jsoup.parse(this.strHTML);
	    }
	    
	    public JSONObject getJSONObject()  {
	    	return new JSONObject(this.strHTML);
	    }
}

