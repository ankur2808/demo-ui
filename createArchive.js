import AdmZip from "adm-zip"


async function createZipArchive() {
  const zip = new AdmZip();
  const outputFile = "./dist/hello-world.zip";
  zip.addLocalFolder("./build");
  //zip.addLocalFile("./dist")
  zip.writeZip( outputFile);
  console.log(`Created ${outputFile} successfully`);
}

createZipArchive();