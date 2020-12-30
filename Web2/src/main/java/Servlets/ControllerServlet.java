package Servlets;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class ControllerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/index.jsp").forward(request,response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            if (checkrequest(request)) {
                getServletContext().getRequestDispatcher("/AreaCheckServlet").forward(request, response);
            } else {
                getServletContext().getRequestDispatcher("/index.jsp").forward(request, response);
            }
        }catch (Exception e){
            PrintWriter writer = response.getWriter();
            writer.write("Something went wrong: "+ e.toString());
            writer.close();
        }
    }

    public boolean checkrequest(HttpServletRequest req){
        try {
            Double dy = Double.parseDouble(req.getParameter("Y"));
            Double dr = Double.parseDouble(req.getParameter("R"));
            return true;
        }catch (NumberFormatException | NullPointerException e){
            return false;
        }
    }
}
