const imagemin = require("imagemin");
const imageminWebp = require("imagemin-webp");

(async () => {
  const jpg = await imagemin(["images/*.jpg"], {
    destination: "build/webp",
    plugins: [imageminWebp({ quality: 65 })],
  });
  const png = await imagemin(["images/*.png"], {
    destination: "build/webp",
    plugins: [imageminWebp({ quality: 65 })],
  });

  console.log(jpg);
  console.log(png)
  //=> [{data: <Buffer 89 50 4e …>, destinationPath: 'build/images/foo.jpg'}, …]
})();
