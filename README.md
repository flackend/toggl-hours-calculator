# Toggl Hours Calculator Script

A jQuery script that adds up the number of hours logged. It only adds up the time for the tasks whose checkboxes you mark.

## Usage

Visit [toggl.com/track](https://www.toggl.com/track) and check the checkboxes of the rows of the tasks that you want calculated. Activate the bookmarklet!

![Usage tutorial](http://f.cl.ly/items/1x3S1C1h3E0L16101g1V/tutorial-toggl-bookmarklet.gif)

Save the bookmarklet: [Toggl: Calculate Hours](javascript:var%20totalHours%3D0%3B%24%28%22.task%20input%3Achecked%22%29.each%28function%28%29%7Bvar%20e%3D%24%28this%29.parent%28%29.find%28%22.duration%22%29.text%28%29%3Bvar%20t%3De.split%28%22%3A%22%29%3Bvar%20n%3D0%3Bif%28t%5Bt.length-3%5D%21%3D%3Dundefined%29%7Bn%3DparseInt%28t%5Bt.length-3%5D%2C10%29%7Dvar%20r%3DparseInt%28t%5Bt.length-2%5D%2C10%29%3Bvar%20i%3DparseInt%28t%5Bt.length-1%5D%2C10%29%3BtotalHours%2B%3D%28i/60%2Br%29/60%2Bn%7D%29%3BtotalHours%3DMath.round%28totalHours%2A100%29/100%3Bprompt%28%22Total%20hours%20of%20checked%20items%3A%22%2CtotalHours%29)
