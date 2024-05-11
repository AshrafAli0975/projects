from flask import Flask,render_template,redirect,url_for,request
app=Flask(__name__)

#day 1

# @app.route('/<name>')
# def home(name):
#     return render_template('main.html',content=name)

# @app.route('/<name>')
# def nameni(name):
#     return f'hello {name}'


# @app.route('/contact')
# def contact():
#     # return 'this is contact'
#     return  redirect(url_for("home"))



#day2 (get and post method)
@app.route('/succesfull')
def redirec():
    return render_template("redirect.html")

@app.route('/',methods=["GET","POST"])
def method():
  
    if request.method=="POST":
        name=request.form["name"]
        passw=request.form["password"]
        if name==name and passw==name:
            return render_template("contact.html",nae=name,password=passw)

        else:
            return redirect(url_for("redirec"))
    else:
        return render_template("login.html")
    


if __name__=="__main__":
    app.run(debug=True)

