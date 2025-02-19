import type { StructureResolver } from "sanity/structure";
import {
  LuFileText,
  LuNavigation,
  LuHouse,
  LuImages,
  LuImage,
  LuMenu,
  LuUser,
  LuShoppingCart,
} from "react-icons/lu";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("SEVALAND")
    .items([
      S.listItem({
        id: "metadata",
        icon: LuFileText,
      })
        .title("Metadata")
        .child(S.document().schemaType("metadata").documentId("metadata")),
      S.listItem({
        id: "navigation",
        icon: LuNavigation,
      })
        .title("Navigation")
        .child(S.document().schemaType("navigation").documentId("navigation")),
      S.listItem({
        id: "home",
        icon: LuHouse,
      })
        .title("Home")
        .child(S.document().schemaType("home").documentId("home")),
      S.listItem({
        id: "projects",
        icon: LuImages,
      })
        .title("Projects")
        .child(
          S.list()
            .title("Projects")
            .items([
              S.listItem({
                id: "menu",
                icon: LuMenu,
              })
                .title("Menu")
                .child(
                  S.document().schemaType("projects").documentId("projects"),
                ),
              S.listItem({
                id: "project",
                icon: LuImage,
              })
                .title("Project")
                .child(
                  S.documentList().title("Project").filter("_type=='project'"),
                ),
            ]),
        ),
      S.listItem({
        id: "shop",
        icon: LuShoppingCart,
      })
        .title("Shop")
        .child(S.document().schemaType("shop").documentId("shop")),
      S.listItem({
        id: "about",
        icon: LuUser,
      })
        .title("About")
        .child(S.document().schemaType("about").documentId("about")),
    ]);
