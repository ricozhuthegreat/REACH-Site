import java.io.FileReader;
import java.io.IOException;
import java.io.BufferedReader;
import java.io.FileNotFoundException;

import java.util.ArrayList;

public class CustomFileReader {

	public ArrayList<String> readFileAsList (String fileName) throws FileNotFoundException{
		BufferedReader br = new BufferedReader(new FileReader(fileName));
		ArrayList<String> lines = new ArrayList<String>();
		while(true){
    		try{
    			String temp = br.readLine();
    			if(temp != null){
    				lines.add(temp);
    			}else{
    				break;
    			}
    		}catch(IOException E){
    			// Reading Failed
    			System.out.println("Reading Failed");
    		}
    	}
		return lines;
	}
	
}
