module.exports = {
  importOrder: [
    "^@core/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@/(.*)$",
    "^@/app/(.*)$",
    "^@/components/(.*)$",
    "^@/libs/(.*)$",
    "^[./]",
  ],
  plugins: [require("@trivago/prettier-plugin-sort-imports")],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
