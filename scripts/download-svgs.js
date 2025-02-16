import axios from "axios";
import { writeFileSync } from "fs";
import { Octokit } from "octokit";

// We need all image names to match tier names
function formatName(n) {
  const _n = n.replace(".svg", "");

  switch (_n) {
    case "ducttape":
      return "duct-tape";
    case "astronaut-body":
      return "astronaut-suit";
    case "geisha-body":
      return "geisha-gown";
    case "jonny-utah-shirty":
      return "jonny-utah-shirt";
    case "nerd":
      return "nerd-glasses";
    case "peachhair":
      return "peach-hair";
    case "mouthstraw":
      return "wheat-straw";
    case "gap-tooth":
      return "gap-teeth";
    case "dj-booth":
      return "dj-deck";
    case "beer":
      return "cheap-beer";
  }

  return _n;
}

async function main() {
  // https://github.com/octokit/core.js#readme
  const octokit = new Octokit();

  const { data: svgs } = await octokit.request(
    "GET /repos/mejango/bannyverse-drop-outfits/contents/editions/1/optimized-svgs",
    {
      owner: "OWNER",
      repo: "REPO",
      path: "PATH",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );

  const promises = [];

  let fileContents = `export const ASSET_SVGS: Record<string, string> = {
    ["alien"]: ${"`"}${ALIEN}${"`"},
    ["pink"]: ${"`"}${PINK}${"`"},
    ["orange"]: ${"`"}${ORANGE}${"`"},
    ["original"]: ${"`"}${ORIGINAL}${"`"},`;

  svgs.forEach(({ name, download_url }) =>
    promises.push(
      axios.get(download_url).then((res) => {
        const _name = formatName(name);

        fileContents += `["${_name}"]: ${"`"}${res.data
          .replace(
            `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' fill='none'>`,
            ""
          )
          .replace(`</svg>`, "")}${"`"},`;
      })
    )
  );

  await Promise.all(promises);

  fileContents += `};`;

  writeFileSync(`src/constants/assetSvgs.ts`, fileContents);

  console.log("DONE");
}

main();

const ALIEN = `<style>.o{fill:#050505;}.w{fill:#f9f9f9;}</style><style>.b1{fill:#67d757;}.b2{fill:#30a220;}.b3{fill:#217a15;}.b4{fill:#09490f;}.a1{fill:#e483ef;}.a2{fill:#dc2fef;}.a3{fill:#dc2fef;}</style><g class="a1"><path d="M173 53h4v17h-4z"/></g><g class="a2"><path d="M167 57h3v10h-3z"/><path d="M169 53h4v17h-4z"/></g><g class="a3"><path d="M167 53h3v4h-3z"/><path d="M163 57h4v10h-4z"/><path d="M167 67h3v3h-3z"/></g><g class="b1"><path d="M213 253h-3v-3-3h-3v-7-3h-4v-10h-3v-7-7-3h-3v-73h-4v-10h-3v-10h-3v-7h-4v-7h-3v-3h-3v-3h-4v10h4v10h3v10h3v3h4v7 3 70 3h3v7h3v20h4v7h3v3h3v3h4v4h3v3h3v-3-4z"/><path d="M253 307v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-6h-3v-7h-4v17h4v3h3v3h3 4v4h3v3h3v3h4v4h3v3h3v3h4v4h3v3h3v3h4v-6h-4z"/></g><g class="b2"><path d="M250 310v-3h-3v-4h-4v-3h-3v-3h-3v-4h-4v-3h-3v-3h-3v-4h-7v-3h-3v-3h-4v-17h-3v-3h-3v-4h-4v-3h-3v-3h-3v-7h-4v-20h-3v-7h-3v-73-3-7h-4v-3h-3v-10h-3v-10h-4V70h-3v-3l-3 100 3-100v40h-3v10h-4v6h-3v14h-3v3 13h-4v44h4v16h3v14h3v13h4v10h3v7h3v3h4v3h3v4h3v3h4v3h3v4h3v3h4v3h3v7h7v7h6v3h7v3h7v4h13v3h3v3h10v-3h-3zm-103-87v-16h3v-10h-3v6h-4v17h-3v10h3v-7h4z"/><path d="M143 230h4v7h-4zm4 10h3v3h-3zm3 7h3v3h-3zm3 6h4v4h-4z"/><path d="M163 257h-6v3h3v3h3v4h4v-4-3h-4v-3z"/></g><g class="b3"><path d="M143 197v6h4v-6h6v-44h4v-16h3v-14h3v-6h4v-10h3V97h-7v6h-3v4h-3v3h-4v3h-3v4 3h-3v3 4h-4v10h-3v16 4h-3v46h3v-6h3z"/><path d="M140 203h3v17h-3z"/><path d="M137 220h3v10h-3z"/><path d="M153 250h-3v-7h-3v-6h-4v-7h-3v10h3v7h4v6h3v4h3v-7zm-3 10h3v7h-3z"/><path d="M147 257h3v3h-3zm6 0h4v3h-4z"/><path d="M160 263v-3h-3v3 7h6v-7h-3zm-10-56v16h-3v7h3v10h3v7h4v6h6v4h7v-4-3h-3v-10h-4v-13h-3v-14h-3v-16h-4v10h-3z"/><path d="M243 313v-3h-3v-3h-10-3v-4h-7v-3h-7v-3h-6v-7h-7v-7h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v10h-3v3h-4v3h-3v7h3v7h4v6h3v5h4v3h6v3h3v3h4 3v3h3 4v3h3 3v4h10v3h7 7 3v3h10 3v-3h10v-3h4v-4h-14z"/></g><g class="b4"><path d="M183 130h4v7h-4z"/><path d="M180 127h3v3h-3zm-27-4h4v7h-4z"/><path d="M157 117h3v6h-3z"/><path d="M160 110h3v7h-3z"/><path d="M163 107h4v3h-4zm-3 83h3v7h-3z"/><path d="M163 187h4v3h-4zm20 0h7v3h-7z"/><path d="M180 190h3v3h-3zm10-7h3v4h-3z"/><path d="M193 187h4v6h-4zm-20 53h4v7h-4z"/><path d="M177 247h3v6h-3z"/><path d="M180 253h3v7h-3z"/><path d="M183 260h7v3h-7z"/><path d="M190 263h3v4h-3zm0-20h3v4h-3z"/><path d="M187 240h3v3h-3z"/><path d="M190 237h3v3h-3zm13 23h4v3h-4z"/><path d="M207 263h3v7h-3z"/><path d="M210 270h3v3h-3zm-10 7h3v6h-3z"/><path d="M203 283h4v7h-4z"/><path d="M207 290h6v3h-6z"/></g><g class="o"><path d="M133 157h4v50h-4zm0 63h4v10h-4zm27-163h3v10h-3z"/><path d="M163 53h4v4h-4z"/><path d="M167 50h10v3h-10z"/><path d="M177 53h3v17h-3z"/><path d="M173 70h4v27h-4zm-6 0h3v27h-3z"/><path d="M163 67h4v3h-4zm0 30h4v3h-4z"/><path d="M160 100h3v3h-3z"/><path d="M157 103h3v4h-3z"/><path d="M153 107h4v3h-4z"/><path d="M150 110h3v3h-3z"/><path d="M147 113h3v7h-3z"/><path d="M143 120h4v7h-4z"/><path d="M140 127h3v10h-3z"/><path d="M137 137h3v20h-3zm56-10h4v10h-4z"/><path d="M190 117h3v10h-3z"/><path d="M187 110h3v7h-3z"/><path d="M183 103h4v7h-4z"/><path d="M180 100h3v3h-3z"/><path d="M177 97h3v3h-3zm-40 106h3v17h-3zm0 27h3v10h-3zm10 30h3v7h-3z"/><path d="M150 257v-4h-3v-6h-4v-7h-3v10h3v10h4v-3h3z"/><path d="M150 257h3v3h-3z"/><path d="M163 273v-3h-6v-10h-4v7h-3v3h3v3h4v7h3v-7h3z"/><path d="M163 267h4v3h-4z"/><path d="M170 257h-3-4v3h4v7h3v-10z"/><path d="M157 253h6v4h-6z"/><path d="M153 247h4v6h-4z"/><path d="M150 240h3v7h-3z"/><path d="M147 230h3v10h-3zm13 50h3v7h-3z"/><path d="M143 223h4v7h-4z"/><path d="M147 207h3v16h-3z"/><path d="M150 197h3v10h-3zm-10 0h3v6h-3zm50 113h7v3h-7zm23 10h17v3h-17z"/><path d="M230 323h13v4h-13z"/><path d="M243 320h10v3h-10z"/><path d="M253 317h4v3h-4z"/><path d="M257 307h3v10h-3z"/><path d="M253 303h4v4h-4z"/><path d="M250 300h3v3h-3z"/><path d="M247 297h3v3h-3z"/><path d="M243 293h4v4h-4z"/><path d="M240 290h3v3h-3z"/><path d="M237 287h3v3h-3z"/><path d="M233 283h4v4h-4z"/><path d="M230 280h3v3h-3z"/><path d="M227 277h3v3h-3z"/><path d="M223 273h4v4h-4z"/><path d="M220 267h3v6h-3z"/><path d="M217 260h3v7h-3z"/><path d="M213 253h4v7h-4z"/><path d="M210 247h3v6h-3z"/><path d="M207 237h3v10h-3z"/><path d="M203 227h4v10h-4zm-40 60h4v6h-4zm24 20h3v3h-3z"/><path d="M167 293h3v5h-3zm16 14h4v3h-4z"/><path d="M170 298h4v3h-4zm10 6h3v3h-3z"/><path d="M174 301h6v3h-6zm23 12h6v4h-6z"/><path d="M203 317h10v3h-10zm-2-107v-73h-4v73h3v17h3v-17h-2z"/></g><g class="o"><path d="M187 307v-4h3v-6h-3v-4h-4v-3h-3v-3h-7v-4h-6v4h-4v3h4v27h-4v13h-3v10h-4v7h4v3h3 10 14v-3h-4v-4h-3v-3h-3v-3h-4v-7h4v-10h3v-7h3v-3h7v-3h-3zm16 10v-4h-6v17h-4v10h-3v7h3v3h4 6 4 3 14v-3h-4v-4h-7v-3h-3v-3h-3v-10h3v-7h3v-3h-10z"/></g><g class="o"><path d="M190 127h3v3h-3zm3 13h4v3h-4zm-42 0h6v6h-6z"/><path d="M151 133h3v7h-3zm10 0h6v4h-6z"/><path d="M157 137h17v6h-17zm3 13h14v3h-14zm17-13h7v16h-7z"/><path d="M184 137h6v6h-6zm0 10h10v6h-10z"/><path d="M187 143h10v4h-10z"/><path d="M190 140h3v3h-3zm-6-10h3v7h-3z"/><path d="M187 130h6v3h-6zm-36 0h10v3h-10zm16 13h7v7h-7zm-10 0h7v7h-7z"/><path d="M164 147h3v3h-3zm29-20h4v6h-4z"/><path d="M194 133h3v7h-3z"/></g><g class="w"><path d="M154 133h7v4h-7z"/><path d="M154 137h3v3h-3zm10 6h3v4h-3zm20 0h3v4h-3zm3-10h7v4h-7z"/><path d="M190 137h4v3h-4z"/></g>`;

const PINK = `<style>.o{fill:#050505;}.w{fill:#f9f9f9;}</style><style>.b1{fill:#ffd8c5;}.b2{fill:#ff96a9;}.b3{fill:#fe588b;}.b4{fill:#c92f45;}.a1{fill:#ffd8c5;}.a2{fill:#ff96a9;}.a3{fill:#fe588b;}</style><g class="a1"><path d="M173 53h4v17h-4z"/></g><g class="a2"><path d="M167 57h3v10h-3z"/><path d="M169 53h4v17h-4z"/></g><g class="a3"><path d="M167 53h3v4h-3z"/><path d="M163 57h4v10h-4z"/><path d="M167 67h3v3h-3z"/></g><g class="b1"><path d="M213 253h-3v-3-3h-3v-7-3h-4v-10h-3v-7-7-3h-3v-73h-4v-10h-3v-10h-3v-7h-4v-7h-3v-3h-3v-3h-4v10h4v10h3v10h3v3h4v7 3 70 3h3v7h3v20h4v7h3v3h3v3h4v4h3v3h3v-3-4z"/><path d="M253 307v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-6h-3v-7h-4v17h4v3h3v3h3 4v4h3v3h3v3h4v4h3v3h3v3h4v4h3v3h3v3h4v-6h-4z"/></g><g class="b2"><path d="M250 310v-3h-3v-4h-4v-3h-3v-3h-3v-4h-4v-3h-3v-3h-3v-4h-7v-3h-3v-3h-4v-17h-3v-3h-3v-4h-4v-3h-3v-3h-3v-7h-4v-20h-3v-7h-3v-73-3-7h-4v-3h-3v-10h-3v-10h-4V70h-3v-3l-3 100 3-100v40h-3v10h-4v6h-3v14h-3v3 13h-4v44h4v16h3v14h3v13h4v10h3v7h3v3h4v3h3v4h3v3h4v3h3v4h3v3h4v3h3v7h7v7h6v3h7v3h7v4h13v3h3v3h10v-3h-3zm-103-87v-16h3v-10h-3v6h-4v17h-3v10h3v-7h4z"/><path d="M143 230h4v7h-4zm4 10h3v3h-3zm3 7h3v3h-3zm3 6h4v4h-4z"/><path d="M163 257h-6v3h3v3h3v4h4v-4-3h-4v-3z"/></g><g class="b3"><path d="M143 197v6h4v-6h6v-44h4v-16h3v-14h3v-6h4v-10h3V97h-7v6h-3v4h-3v3h-4v3h-3v4 3h-3v3 4h-4v10h-3v16 4h-3v46h3v-6h3z"/><path d="M140 203h3v17h-3z"/><path d="M137 220h3v10h-3z"/><path d="M153 250h-3v-7h-3v-6h-4v-7h-3v10h3v7h4v6h3v4h3v-7zm-3 10h3v7h-3z"/><path d="M147 257h3v3h-3zm6 0h4v3h-4z"/><path d="M160 263v-3h-3v3 7h6v-7h-3zm-10-56v16h-3v7h3v10h3v7h4v6h6v4h7v-4-3h-3v-10h-4v-13h-3v-14h-3v-16h-4v10h-3z"/><path d="M243 313v-3h-3v-3h-10-3v-4h-7v-3h-7v-3h-6v-7h-7v-7h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v10h-3v3h-4v3h-3v7h3v7h4v6h3v5h4v3h6v3h3v3h4 3v3h3 4v3h3 3v4h10v3h7 7 3v3h10 3v-3h10v-3h4v-4h-14z"/></g><g class="b4"><path d="M183 130h4v7h-4z"/><path d="M180 127h3v3h-3zm-27-4h4v7h-4z"/><path d="M157 117h3v6h-3z"/><path d="M160 110h3v7h-3z"/><path d="M163 107h4v3h-4zm-3 83h3v7h-3z"/><path d="M163 187h4v3h-4zm20 0h7v3h-7z"/><path d="M180 190h3v3h-3zm10-7h3v4h-3z"/><path d="M193 187h4v6h-4zm-20 53h4v7h-4z"/><path d="M177 247h3v6h-3z"/><path d="M180 253h3v7h-3z"/><path d="M183 260h7v3h-7z"/><path d="M190 263h3v4h-3zm0-20h3v4h-3z"/><path d="M187 240h3v3h-3z"/><path d="M190 237h3v3h-3zm13 23h4v3h-4z"/><path d="M207 263h3v7h-3z"/><path d="M210 270h3v3h-3zm-10 7h3v6h-3z"/><path d="M203 283h4v7h-4z"/><path d="M207 290h6v3h-6z"/></g><g class="o"><path d="M133 157h4v50h-4zm0 63h4v10h-4zm27-163h3v10h-3z"/><path d="M163 53h4v4h-4z"/><path d="M167 50h10v3h-10z"/><path d="M177 53h3v17h-3z"/><path d="M173 70h4v27h-4zm-6 0h3v27h-3z"/><path d="M163 67h4v3h-4zm0 30h4v3h-4z"/><path d="M160 100h3v3h-3z"/><path d="M157 103h3v4h-3z"/><path d="M153 107h4v3h-4z"/><path d="M150 110h3v3h-3z"/><path d="M147 113h3v7h-3z"/><path d="M143 120h4v7h-4z"/><path d="M140 127h3v10h-3z"/><path d="M137 137h3v20h-3zm56-10h4v10h-4z"/><path d="M190 117h3v10h-3z"/><path d="M187 110h3v7h-3z"/><path d="M183 103h4v7h-4z"/><path d="M180 100h3v3h-3z"/><path d="M177 97h3v3h-3zm-40 106h3v17h-3zm0 27h3v10h-3zm10 30h3v7h-3z"/><path d="M150 257v-4h-3v-6h-4v-7h-3v10h3v10h4v-3h3z"/><path d="M150 257h3v3h-3z"/><path d="M163 273v-3h-6v-10h-4v7h-3v3h3v3h4v7h3v-7h3z"/><path d="M163 267h4v3h-4z"/><path d="M170 257h-3-4v3h4v7h3v-10z"/><path d="M157 253h6v4h-6z"/><path d="M153 247h4v6h-4z"/><path d="M150 240h3v7h-3z"/><path d="M147 230h3v10h-3zm13 50h3v7h-3z"/><path d="M143 223h4v7h-4z"/><path d="M147 207h3v16h-3z"/><path d="M150 197h3v10h-3zm-10 0h3v6h-3zm50 113h7v3h-7zm23 10h17v3h-17z"/><path d="M230 323h13v4h-13z"/><path d="M243 320h10v3h-10z"/><path d="M253 317h4v3h-4z"/><path d="M257 307h3v10h-3z"/><path d="M253 303h4v4h-4z"/><path d="M250 300h3v3h-3z"/><path d="M247 297h3v3h-3z"/><path d="M243 293h4v4h-4z"/><path d="M240 290h3v3h-3z"/><path d="M237 287h3v3h-3z"/><path d="M233 283h4v4h-4z"/><path d="M230 280h3v3h-3z"/><path d="M227 277h3v3h-3z"/><path d="M223 273h4v4h-4z"/><path d="M220 267h3v6h-3z"/><path d="M217 260h3v7h-3z"/><path d="M213 253h4v7h-4z"/><path d="M210 247h3v6h-3z"/><path d="M207 237h3v10h-3z"/><path d="M203 227h4v10h-4zm-40 60h4v6h-4zm24 20h3v3h-3z"/><path d="M167 293h3v5h-3zm16 14h4v3h-4z"/><path d="M170 298h4v3h-4zm10 6h3v3h-3z"/><path d="M174 301h6v3h-6zm23 12h6v4h-6z"/><path d="M203 317h10v3h-10zm-2-107v-73h-4v73h3v17h3v-17h-2z"/></g><g class="o"><path d="M187 307v-4h3v-6h-3v-4h-4v-3h-3v-3h-7v-4h-6v4h-4v3h4v27h-4v13h-3v10h-4v7h4v3h3 10 14v-3h-4v-4h-3v-3h-3v-3h-4v-7h4v-10h3v-7h3v-3h7v-3h-3zm16 10v-4h-6v17h-4v10h-3v7h3v3h4 6 4 3 14v-3h-4v-4h-7v-3h-3v-3h-3v-10h3v-7h3v-3h-10z"/></g><g class="o"><path d="M177 140v3h6v11h10v-11h4v-3h-20z"/><path d="M153 140v3h7v8 3h7 3v-11h3v-3h-20z"/></g><g class="w"><path d="M153 143h7v4h-7z"/><path d="M157 147h3v3h-3zm20-4h6v4h-6z"/><path d="M180 147h3v3h-3z"/></g>`;

const ORANGE = `<style>.o{fill:#050505;}.w{fill:#f9f9f9;}</style><style>.b1{fill:#f3a603;}.b2{fill:#ff7c02;}.b3{fill:#fd3600;}.b4{fill:#c32e0d;}.a1{fill:#f3a603;}.a2{fill:#ff7c02;}.a3{fill:#fd3600;}</style><g class="a1"><path d="M173 53h4v17h-4z"/></g><g class="a2"><path d="M167 57h3v10h-3z"/><path d="M169 53h4v17h-4z"/></g><g class="a3"><path d="M167 53h3v4h-3z"/><path d="M163 57h4v10h-4z"/><path d="M167 67h3v3h-3z"/></g><g class="b1"><path d="M213 253h-3v-3-3h-3v-7-3h-4v-10h-3v-7-7-3h-3v-73h-4v-10h-3v-10h-3v-7h-4v-7h-3v-3h-3v-3h-4v10h4v10h3v10h3v3h4v7 3 70 3h3v7h3v20h4v7h3v3h3v3h4v4h3v3h3v-3-4z"/><path d="M253 307v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-6h-3v-7h-4v17h4v3h3v3h3 4v4h3v3h3v3h4v4h3v3h3v3h4v4h3v3h3v3h4v-6h-4z"/></g><g class="b2"><path d="M250 310v-3h-3v-4h-4v-3h-3v-3h-3v-4h-4v-3h-3v-3h-3v-4h-7v-3h-3v-3h-4v-17h-3v-3h-3v-4h-4v-3h-3v-3h-3v-7h-4v-20h-3v-7h-3v-73-3-7h-4v-3h-3v-10h-3v-10h-4V70h-3v-3l-3 100 3-100v40h-3v10h-4v6h-3v14h-3v3 13h-4v44h4v16h3v14h3v13h4v10h3v7h3v3h4v3h3v4h3v3h4v3h3v4h3v3h4v3h3v7h7v7h6v3h7v3h7v4h13v3h3v3h10v-3h-3zm-103-87v-16h3v-10h-3v6h-4v17h-3v10h3v-7h4z"/><path d="M143 230h4v7h-4zm4 10h3v3h-3zm3 7h3v3h-3zm3 6h4v4h-4z"/><path d="M163 257h-6v3h3v3h3v4h4v-4-3h-4v-3z"/></g><g class="b3"><path d="M143 197v6h4v-6h6v-44h4v-16h3v-14h3v-6h4v-10h3V97h-7v6h-3v4h-3v3h-4v3h-3v4 3h-3v3 4h-4v10h-3v16 4h-3v46h3v-6h3z"/><path d="M140 203h3v17h-3z"/><path d="M137 220h3v10h-3z"/><path d="M153 250h-3v-7h-3v-6h-4v-7h-3v10h3v7h4v6h3v4h3v-7zm-3 10h3v7h-3z"/><path d="M147 257h3v3h-3zm6 0h4v3h-4z"/><path d="M160 263v-3h-3v3 7h6v-7h-3zm-10-56v16h-3v7h3v10h3v7h4v6h6v4h7v-4-3h-3v-10h-4v-13h-3v-14h-3v-16h-4v10h-3z"/><path d="M243 313v-3h-3v-3h-10-3v-4h-7v-3h-7v-3h-6v-7h-7v-7h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v10h-3v3h-4v3h-3v7h3v7h4v6h3v5h4v3h6v3h3v3h4 3v3h3 4v3h3 3v4h10v3h7 7 3v3h10 3v-3h10v-3h4v-4h-14z"/></g><g class="b4"><path d="M183 130h4v7h-4z"/><path d="M180 127h3v3h-3zm-27-4h4v7h-4z"/><path d="M157 117h3v6h-3z"/><path d="M160 110h3v7h-3z"/><path d="M163 107h4v3h-4zm-3 83h3v7h-3z"/><path d="M163 187h4v3h-4zm20 0h7v3h-7z"/><path d="M180 190h3v3h-3zm10-7h3v4h-3z"/><path d="M193 187h4v6h-4zm-20 53h4v7h-4z"/><path d="M177 247h3v6h-3z"/><path d="M180 253h3v7h-3z"/><path d="M183 260h7v3h-7z"/><path d="M190 263h3v4h-3zm0-20h3v4h-3z"/><path d="M187 240h3v3h-3z"/><path d="M190 237h3v3h-3zm13 23h4v3h-4z"/><path d="M207 263h3v7h-3z"/><path d="M210 270h3v3h-3zm-10 7h3v6h-3z"/><path d="M203 283h4v7h-4z"/><path d="M207 290h6v3h-6z"/></g><g class="o"><path d="M133 157h4v50h-4zm0 63h4v10h-4zm27-163h3v10h-3z"/><path d="M163 53h4v4h-4z"/><path d="M167 50h10v3h-10z"/><path d="M177 53h3v17h-3z"/><path d="M173 70h4v27h-4zm-6 0h3v27h-3z"/><path d="M163 67h4v3h-4zm0 30h4v3h-4z"/><path d="M160 100h3v3h-3z"/><path d="M157 103h3v4h-3z"/><path d="M153 107h4v3h-4z"/><path d="M150 110h3v3h-3z"/><path d="M147 113h3v7h-3z"/><path d="M143 120h4v7h-4z"/><path d="M140 127h3v10h-3z"/><path d="M137 137h3v20h-3zm56-10h4v10h-4z"/><path d="M190 117h3v10h-3z"/><path d="M187 110h3v7h-3z"/><path d="M183 103h4v7h-4z"/><path d="M180 100h3v3h-3z"/><path d="M177 97h3v3h-3zm-40 106h3v17h-3zm0 27h3v10h-3zm10 30h3v7h-3z"/><path d="M150 257v-4h-3v-6h-4v-7h-3v10h3v10h4v-3h3z"/><path d="M150 257h3v3h-3z"/><path d="M163 273v-3h-6v-10h-4v7h-3v3h3v3h4v7h3v-7h3z"/><path d="M163 267h4v3h-4z"/><path d="M170 257h-3-4v3h4v7h3v-10z"/><path d="M157 253h6v4h-6z"/><path d="M153 247h4v6h-4z"/><path d="M150 240h3v7h-3z"/><path d="M147 230h3v10h-3zm13 50h3v7h-3z"/><path d="M143 223h4v7h-4z"/><path d="M147 207h3v16h-3z"/><path d="M150 197h3v10h-3zm-10 0h3v6h-3zm50 113h7v3h-7zm23 10h17v3h-17z"/><path d="M230 323h13v4h-13z"/><path d="M243 320h10v3h-10z"/><path d="M253 317h4v3h-4z"/><path d="M257 307h3v10h-3z"/><path d="M253 303h4v4h-4z"/><path d="M250 300h3v3h-3z"/><path d="M247 297h3v3h-3z"/><path d="M243 293h4v4h-4z"/><path d="M240 290h3v3h-3z"/><path d="M237 287h3v3h-3z"/><path d="M233 283h4v4h-4z"/><path d="M230 280h3v3h-3z"/><path d="M227 277h3v3h-3z"/><path d="M223 273h4v4h-4z"/><path d="M220 267h3v6h-3z"/><path d="M217 260h3v7h-3z"/><path d="M213 253h4v7h-4z"/><path d="M210 247h3v6h-3z"/><path d="M207 237h3v10h-3z"/><path d="M203 227h4v10h-4zm-40 60h4v6h-4zm24 20h3v3h-3z"/><path d="M167 293h3v5h-3zm16 14h4v3h-4z"/><path d="M170 298h4v3h-4zm10 6h3v3h-3z"/><path d="M174 301h6v3h-6zm23 12h6v4h-6z"/><path d="M203 317h10v3h-10zm-2-107v-73h-4v73h3v17h3v-17h-2z"/></g><g class="o"><path d="M187 307v-4h3v-6h-3v-4h-4v-3h-3v-3h-7v-4h-6v4h-4v3h4v27h-4v13h-3v10h-4v7h4v3h3 10 14v-3h-4v-4h-3v-3h-3v-3h-4v-7h4v-10h3v-7h3v-3h7v-3h-3zm16 10v-4h-6v17h-4v10h-3v7h3v3h4 6 4 3 14v-3h-4v-4h-7v-3h-3v-3h-3v-10h3v-7h3v-3h-10z"/></g><g class="o"><path d="M177 140v3h6v11h10v-11h4v-3h-20z"/><path d="M153 140v3h7v8 3h7 3v-11h3v-3h-20z"/></g><g class="w"><path d="M153 143h7v4h-7z"/><path d="M157 147h3v3h-3zm20-4h6v4h-6z"/><path d="M180 147h3v3h-3z"/></g>`;

const ORIGINAL = `<style>.o{fill:#050505;}.w{fill:#f9f9f9;}</style><style>.b1{fill:#ffe900;}.b2{fill:#ffc700;}.b3{fill:#f3a603;}.b4{fill:#965a1a;}.a1{fill:#ffe900;}.a2{fill:#ffc700;}.a3{fill:#f3a603;}</style><g class="a1"><path d="M173 53h4v17h-4z"/></g><g class="a2"><path d="M167 57h3v10h-3z"/><path d="M169 53h4v17h-4z"/></g><g class="a3"><path d="M167 53h3v4h-3z"/><path d="M163 57h4v10h-4z"/><path d="M167 67h3v3h-3z"/></g><g class="b1"><path d="M213 253h-3v-3-3h-3v-7-3h-4v-10h-3v-7-7-3h-3v-73h-4v-10h-3v-10h-3v-7h-4v-7h-3v-3h-3v-3h-4v10h4v10h3v10h3v3h4v7 3 70 3h3v7h3v20h4v7h3v3h3v3h4v4h3v3h3v-3-4z"/><path d="M253 307v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-3h-3v-3h-4v-4h-3v-6h-3v-7h-4v17h4v3h3v3h3 4v4h3v3h3v3h4v4h3v3h3v3h4v4h3v3h3v3h4v-6h-4z"/></g><g class="b2"><path d="M250 310v-3h-3v-4h-4v-3h-3v-3h-3v-4h-4v-3h-3v-3h-3v-4h-7v-3h-3v-3h-4v-17h-3v-3h-3v-4h-4v-3h-3v-3h-3v-7h-4v-20h-3v-7h-3v-73-3-7h-4v-3h-3v-10h-3v-10h-4V70h-3v-3l-3 100 3-100v40h-3v10h-4v6h-3v14h-3v3 13h-4v44h4v16h3v14h3v13h4v10h3v7h3v3h4v3h3v4h3v3h4v3h3v4h3v3h4v3h3v7h7v7h6v3h7v3h7v4h13v3h3v3h10v-3h-3zm-103-87v-16h3v-10h-3v6h-4v17h-3v10h3v-7h4z"/><path d="M143 230h4v7h-4zm4 10h3v3h-3zm3 7h3v3h-3zm3 6h4v4h-4z"/><path d="M163 257h-6v3h3v3h3v4h4v-4-3h-4v-3z"/></g><g class="b3"><path d="M143 197v6h4v-6h6v-44h4v-16h3v-14h3v-6h4v-10h3V97h-7v6h-3v4h-3v3h-4v3h-3v4 3h-3v3 4h-4v10h-3v16 4h-3v46h3v-6h3z"/><path d="M140 203h3v17h-3z"/><path d="M137 220h3v10h-3z"/><path d="M153 250h-3v-7h-3v-6h-4v-7h-3v10h3v7h4v6h3v4h3v-7zm-3 10h3v7h-3z"/><path d="M147 257h3v3h-3zm6 0h4v3h-4z"/><path d="M160 263v-3h-3v3 7h6v-7h-3zm-10-56v16h-3v7h3v10h3v7h4v6h6v4h7v-4-3h-3v-10h-4v-13h-3v-14h-3v-16h-4v10h-3z"/><path d="M243 313v-3h-3v-3h-10-3v-4h-7v-3h-7v-3h-6v-7h-7v-7h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v-4h-3v-3h-4v-3h-3v10h-3v3h-4v3h-3v7h3v7h4v6h3v5h4v3h6v3h3v3h4 3v3h3 4v3h3 3v4h10v3h7 7 3v3h10 3v-3h10v-3h4v-4h-14z"/></g><g class="b4"><path d="M183 130h4v7h-4z"/><path d="M180 127h3v3h-3zm-27-4h4v7h-4z"/><path d="M157 117h3v6h-3z"/><path d="M160 110h3v7h-3z"/><path d="M163 107h4v3h-4zm-3 83h3v7h-3z"/><path d="M163 187h4v3h-4zm20 0h7v3h-7z"/><path d="M180 190h3v3h-3zm10-7h3v4h-3z"/><path d="M193 187h4v6h-4zm-20 53h4v7h-4z"/><path d="M177 247h3v6h-3z"/><path d="M180 253h3v7h-3z"/><path d="M183 260h7v3h-7z"/><path d="M190 263h3v4h-3zm0-20h3v4h-3z"/><path d="M187 240h3v3h-3z"/><path d="M190 237h3v3h-3zm13 23h4v3h-4z"/><path d="M207 263h3v7h-3z"/><path d="M210 270h3v3h-3zm-10 7h3v6h-3z"/><path d="M203 283h4v7h-4z"/><path d="M207 290h6v3h-6z"/></g><g class="o"><path d="M133 157h4v50h-4zm0 63h4v10h-4zm27-163h3v10h-3z"/><path d="M163 53h4v4h-4z"/><path d="M167 50h10v3h-10z"/><path d="M177 53h3v17h-3z"/><path d="M173 70h4v27h-4zm-6 0h3v27h-3z"/><path d="M163 67h4v3h-4zm0 30h4v3h-4z"/><path d="M160 100h3v3h-3z"/><path d="M157 103h3v4h-3z"/><path d="M153 107h4v3h-4z"/><path d="M150 110h3v3h-3z"/><path d="M147 113h3v7h-3z"/><path d="M143 120h4v7h-4z"/><path d="M140 127h3v10h-3z"/><path d="M137 137h3v20h-3zm56-10h4v10h-4z"/><path d="M190 117h3v10h-3z"/><path d="M187 110h3v7h-3z"/><path d="M183 103h4v7h-4z"/><path d="M180 100h3v3h-3z"/><path d="M177 97h3v3h-3zm-40 106h3v17h-3zm0 27h3v10h-3zm10 30h3v7h-3z"/><path d="M150 257v-4h-3v-6h-4v-7h-3v10h3v10h4v-3h3z"/><path d="M150 257h3v3h-3z"/><path d="M163 273v-3h-6v-10h-4v7h-3v3h3v3h4v7h3v-7h3z"/><path d="M163 267h4v3h-4z"/><path d="M170 257h-3-4v3h4v7h3v-10z"/><path d="M157 253h6v4h-6z"/><path d="M153 247h4v6h-4z"/><path d="M150 240h3v7h-3z"/><path d="M147 230h3v10h-3zm13 50h3v7h-3z"/><path d="M143 223h4v7h-4z"/><path d="M147 207h3v16h-3z"/><path d="M150 197h3v10h-3zm-10 0h3v6h-3zm50 113h7v3h-7zm23 10h17v3h-17z"/><path d="M230 323h13v4h-13z"/><path d="M243 320h10v3h-10z"/><path d="M253 317h4v3h-4z"/><path d="M257 307h3v10h-3z"/><path d="M253 303h4v4h-4z"/><path d="M250 300h3v3h-3z"/><path d="M247 297h3v3h-3z"/><path d="M243 293h4v4h-4z"/><path d="M240 290h3v3h-3z"/><path d="M237 287h3v3h-3z"/><path d="M233 283h4v4h-4z"/><path d="M230 280h3v3h-3z"/><path d="M227 277h3v3h-3z"/><path d="M223 273h4v4h-4z"/><path d="M220 267h3v6h-3z"/><path d="M217 260h3v7h-3z"/><path d="M213 253h4v7h-4z"/><path d="M210 247h3v6h-3z"/><path d="M207 237h3v10h-3z"/><path d="M203 227h4v10h-4zm-40 60h4v6h-4zm24 20h3v3h-3z"/><path d="M167 293h3v5h-3zm16 14h4v3h-4z"/><path d="M170 298h4v3h-4zm10 6h3v3h-3z"/><path d="M174 301h6v3h-6zm23 12h6v4h-6z"/><path d="M203 317h10v3h-10zm-2-107v-73h-4v73h3v17h3v-17h-2z"/></g><g class="o"><path d="M187 307v-4h3v-6h-3v-4h-4v-3h-3v-3h-7v-4h-6v4h-4v3h4v27h-4v13h-3v10h-4v7h4v3h3 10 14v-3h-4v-4h-3v-3h-3v-3h-4v-7h4v-10h3v-7h3v-3h7v-3h-3zm16 10v-4h-6v17h-4v10h-3v7h3v3h4 6 4 3 14v-3h-4v-4h-7v-3h-3v-3h-3v-10h3v-7h3v-3h-10z"/></g><g class="o"><path d="M177 140v3h6v11h10v-11h4v-3h-20z"/><path d="M153 140v3h7v8 3h7 3v-11h3v-3h-20z"/></g><g class="w"><path d="M153 143h7v4h-7z"/><path d="M157 147h3v3h-3zm20-4h6v4h-6z"/><path d="M180 147h3v3h-3z"/></g>`;
