declare module "sharp" {
  // Directs TypeScript straight to the index typings it was struggling to map
  import sharp from "sharp/lib/index";
  export default sharp;
}
