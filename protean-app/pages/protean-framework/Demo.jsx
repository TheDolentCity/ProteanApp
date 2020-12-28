import { Component } from "react";
import SidebarImportant from "../../components/generic/sidebars/sidebar-important";
import SidebarNote from "../../components/generic/sidebars/sidebar-note";
import SidebarTip from "../../components/generic/sidebars/sidebar-tip";
import SidebarWarning from "../../components/generic/sidebars/sidebar-warning";

class Demo extends Component {
  render() {
    return (
      <article className="space-y-4 divide-y divide-gray-300">
        <div>
          <h1>Header 1</h1>
          <h2>Header 2</h2>
          <h3>Header 3</h3>
          <h4>Header 4</h4>
        </div>
        <div>
          <p className="">
            The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?
          </p>
          <p className="">
            The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?
          </p>
        </div>
        <div>
          <SidebarNote
            title="This is a Note Sidebar Header"
            text="This is Note Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.">
          </SidebarNote>
          <SidebarImportant
            title="This is an Important Sidebar Header"
            text="This is Important Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.">
          </SidebarImportant>
          <SidebarTip
            title="This is a Tip Sidebar Header"
            text="This is Tip Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.">
          </SidebarTip>
          <SidebarWarning
            title="This is a Warning Sidebar Header"
            text="This is Warning Sidebar body text. This text is expected to go on and on for at least some length to show you what a sidebar's content could look like.">
          </SidebarWarning>
        </div>
      </article>
    );
  }
}

export default Demo;