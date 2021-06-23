import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Cell from "./Cell/Cell.js";
import Block from "./Block/Block.js";
import Ruler from "./Ruler/Ruler.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Cell: new Cell({
    x: -104,
    y: -180,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1
  }),
  Block: new Block({
    x: -92,
    y: -12.5,
    direction: 90,
    costumeNumber: 7,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Ruler: new Ruler({
    x: 0,
    y: -195,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
