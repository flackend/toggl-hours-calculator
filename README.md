# Toggl Hours Calculator Script

A jQuery script that adds up the number of hours logged. It only adds up the time for the tasks whose checkboxes you mark.

## Usage

Check off the tasks to add up and click your bookmarklet.

![Usage tutorial](http://cl.ly/image/2i3A3U440e3F/out.gif)


## Bookmarklet

Add the following as a bookmark:

```
javascript:%28function%28e%2Ct%2Cn%2Cr%29%7B%22use%20strict%22%3Bvar%20i%3D0%3Bn%28%22.entry%20input%3Achecked%22%29.each%28function%28%29%7Bvar%20t%3Bswitch%28e.location.pathname%29%7Bcase%22/app/timer%22%3At%3Dn%28this%29.parent%28%29.parent%28%29.parent%28%29.find%28%22.duration%22%29.text%28%29%3Bbreak%7Dvar%20s%3Dt.split%28%22%3A%22%29%3Bvar%20o%3D0%3Bif%28s%5Bs.length-3%5D%21%3D%3Dr%29%7Bo%3DparseInt%28s%5Bs.length-3%5D%2C10%29%7Dvar%20u%3DparseInt%28s%5Bs.length-2%5D%2C10%29%3Bvar%20a%3DparseInt%28s%5Bs.length-1%5D%2C10%29%3Bi%2B%3D%28a/60%2Bu%29/60%2Bo%7D%29%3Bi%3DMath.round%28i%2A100%29/100%3Bvar%20s%3Dprompt%28%22Total%20hours%20of%20checked%20items%3A%22%2Ci%29%7D%29%28this%2Cthis.document%2CjQuery%29
```