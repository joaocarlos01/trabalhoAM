from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def Games():
    return render_template('Games.html')

@app.route("/AimTrain")
def AimTrain():
    return render_template('AimTrain.html')


@app.route("/TileMap")
def TileMap():
    return render_template('TileMap.html')



if __name__ == "__main__":
    app.run(debug=True)
