package Servlets;

import Modules.Entry;
import Modules.EntryList;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;

public class AreaCheckServlet extends HttpServlet {
    String headanswer =
            "<!DOCTYPE html>\n"+
            "<html>\n"+
            "<head>\n"+
            "        <meta charset=\"UTF-8\">\n"+
            "       <title>test</title>\n"+
            "       <link rel=\"stylesheet\" type=\"text/css\" href=\"css/return.css\">\n"+
            "   </head>\n"+
            "   <body>\n"+
            "       <div id=\"body_div\">\n"+
            "           <div id = \"head_div\" class=\"head\">\n"+
            "               <span> Патутин и Митрофанов, P3214</span>\n"+
            "               <span>Вариант 19854</span>\n"+
            "           </div>\n"+
            "           <div id=\"table_div\">\n"+
            "           <table class=\"result\">\n"+
            "               <thead>\n"+
            "                   <tr>\n"+
            "                      <td>X</td>\n"+
            "                      <td>Y</td>\n"+
            "                      <td>R</td>\n"+
            "                      <td>Result</td>\n"+
            "                   </tr>\n"+
            "               </thead>\n"+
            "               <tbody id=\"#table_body\">\n";
    String endanswer =
            "               </tbody>\n"+
            "           </table>\n"+
            "           </div>\n"+
            "          <a href=\"/WebLab_2-1.0-SNAPSHOT\">Return</a>\n"+
            "       </div>\n"+
            "   </body>\n"+
            "</html>";

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session = request.getSession();

        String[] x_vals = request.getParameterValues("X");
        Double y = Double.parseDouble(request.getParameter("Y"));
        double r = 0.0;
        String[] r_vals = request.getParameterValues("R");
        for (String s: r_vals) {
            if(Double.parseDouble(s) > r) r = Double.parseDouble(s);
        }
        if(x_vals == null){
            x_vals = new String[1];
            x_vals[0] = request.getParameter("X_X");
        }
        response.setContentType("text/html; charset=UTF-8");
        String answer="";
        for (String x_val : x_vals) {
            Double x = Double.parseDouble(x_val);
            if (checkRange(x, y, r)) {
                Entry entry = new Entry();
                entry.setX(x);
                entry.setY(y);
                entry.setR(r);
                entry.setResult(checkArea(x, y, r));

                EntryList entryList = (EntryList) session.getAttribute("EntryList");
                if (entryList == null) {
                    entryList = new EntryList();
                }
                entryList.addEntry(entry);
                session.setAttribute("EntryList", entryList);

                answer = answer + prepareResponse(entry);
            } else{
                headanswer = prepareError("Do not change the request, please");
                endanswer = "";
            }
        }
        PrintWriter writer = response.getWriter();
        writer.write(headanswer + answer + endanswer);
        writer.close();
    }

    private boolean checkRange(Double x, Double y, Double r){
        return ((x>=-5) && (x<=3) &&
                (y>=-5) && (y<=3) &&
                (r>=1) && (r<=5));
    }

    private boolean checkArea(Double x, Double y, Double r) {
        if ((x >= 0) && (y >= 0) && (r * r >= x * x + y * y)) {
            return true;
        } else if ((x >= 0) && (y <= 0) && (x-y <= r)) {
            return true;
        } else if ((x <= 0) && (y <= 0) && (x >= -r) && (y >= -r / 2)) {
            return true;
        } else {
            return false;
        }
    }

    private String prepareResponse(Entry entry){

        return  "               <tr>\n"+
                "                   <td><div class='cell'>"+entry.getX()+"</div></td>\n"+
                "                   <td><div class='cell'>"+entry.getY()+"</div></td>\n"+
                "                   <td><div class='cell'>"+entry.getR()+"</div></td>\n"+
                "                   <td><div class='cell'>"+entry.isResult()+"</div></td>\n"+
                "                 </tr>\n";

    }

    public String prepareError(String type) {
        return  "<!DOCTYPE html>\n"+
                "<html>\n"+
                "<head>\n"+
                "        <meta charset=\"utf-8\">\n"+
                "       <title>test</title>\n"+
                "       <link rel=\"stylesheet\" type=\"text/css\" href=\"css/return.css\">\n"+
                "   </head>\n"+
                "   <body>\n"+
                "       <div id=\"body_div\">\n"+
                "           <div id=\"head_div\" class=\"head\">\n"+
                "              <span id=\"error\"> INDEX OUT OF RANGE: " + type +"</span>"+
                "           </div>\n"+
                "          <a href=\"/WebLab_2-1.0-SNAPSHOT\">Return</a>\n"+
                "       </div>\n"+
                "   </body>\n"+
                "</html>";
    }
}
