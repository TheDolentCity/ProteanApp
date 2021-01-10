import { Component } from "react";
import { SidebarHeader, SidebarBody, SidebarNote, SidebarImportant, SidebarTip, SidebarWarning } from "../../components/generic/book/sidebar";

export default function Demo() {
  return (
    <article className="space-y-4 divide-y divide-gray-300 dark:divide-gray-700">
      {/* ========================================================================================================== */}
      <div>
        <h1>Header 1</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <h4>Header 4</h4>
      </div>
      {/* ========================================================================================================== */}
      <div>
        <p className="">
          The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?
        </p>
        <p className="">
          The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?
        </p>
      </div>
      <div>
        {/* ========================================================================================================== */}
        <SidebarNote>
          <SidebarHeader>
            This is a Note Sidebar Header
          </SidebarHeader>
          <SidebarBody>
            This is Note Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.
          </SidebarBody>
        </SidebarNote>
        {/* ========================================================================================================== */}
        <SidebarImportant>
          <SidebarHeader>
            This is a Important Sidebar Header
          </SidebarHeader>
          <SidebarBody>
            This is Important Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.
          </SidebarBody>
        </SidebarImportant>
        {/* ========================================================================================================== */}
        <SidebarTip>
          <SidebarHeader>
            This is a Tip Sidebar Header
          </SidebarHeader>
          <SidebarBody>
            This is Tip Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.
          </SidebarBody>
        </SidebarTip>
        {/* ========================================================================================================== */}
        <SidebarWarning>
          <SidebarHeader>
            This is a Warning Sidebar Header
          </SidebarHeader>
          <SidebarBody>
            This is Warning Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.
          </SidebarBody>
        </SidebarWarning>
        {/* ========================================================================================================== */}
      </div>
    </article>
  );
}