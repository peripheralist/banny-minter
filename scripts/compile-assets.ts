import fs from "fs";

function read(path: string) {
  return JSON.stringify(
    fs.readdirSync(`${__dirname}/../public/assets/banny/${path}`)
  );
}

const outputPath = `${__dirname}/../src/constants/assets.ts`;

const fileContents = `const BODY = ${read("body")} as const;

const OUTFIT = ${read("outfit")} as const;

const BACKGROUND = ${read("background")} as const;

const HEADGEAR = ${read("headgear")} as const;

const GRIP_RIGHT = ${read("grip-right")} as const;

export const ASSETS = {BODY, OUTFIT, BACKGROUND, HEADGEAR, GRIP_RIGHT};`;

fs.writeFileSync(outputPath, fileContents);
