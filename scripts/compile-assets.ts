import fs from "fs";

function read(path: string) {
  return JSON.stringify(
    fs.readdirSync(`${__dirname}/../public/assets/banny/${path}`)
  );
}

const outputPath = `${__dirname}/../src/constants/assets.ts`;

const fileContents = `export const BODY = ${read("body")} as const;

export const OUTFIT = ${read("outfit")} as const;

export const BACKGROUND = ${read("background")} as const;`;

fs.writeFileSync(outputPath, fileContents);
