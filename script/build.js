import fs from "fs/promises";

(async () =>
{
    console.log("start building...");
    let startTime = Date.now();

    // build
    try
    {
        await fs.copyFile("../qwqsHomePage/dist/main.min.js", "./main.min.js");
        await fs.rm("./wikiPage/", { recursive: true, force: true });
        await fs.cp("../qwqsHomePage/dist/wikiPage/", "./wikiPage/", { recursive: true });
    }
    catch (error)
    {
        console.error(error);
        process.exit(-1);
    }

    console.log(`build done. (${Date.now() - startTime}ms)`);
    process.exit(0);
})();