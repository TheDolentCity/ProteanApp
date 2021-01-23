import { SidebarHeader, SidebarBody, SidebarNote } from "../../../components/generic/book/sidebar";

export default function Index() {
  return (
    <article>
      <h1>The Concept</h1>
      <p>
        The tabletop roleplaying game community has been growing rapidly over the past few years. Developers are pushing the boundaries of RPG design philosophy and consumers are looking for new ways to play and create the games they want. What if there were an open-source game that helps players create the game they want to play?
      </p>
      
      <SidebarNote>
        <SidebarHeader>
          pro·​te·​an | \ ˈprō-tē-ən, prō-ˈtē- \
        </SidebarHeader>
        <SidebarBody>
          Exceedingly variable; readily assuming different shapes or forms.
        </SidebarBody>
      </SidebarNote>
      
      <h2>Enter Protean RPG</h2>
      <p>
        Protean RPG is not just a simple universal system. It is an open source, narrative focused system that anyone can contribute to through simple markdown files. There are five core aspects to the Protean RPG system that makes it a great choice for your next tabletop game.
      </p>

      <h3>1. Open Source Roleplaying</h3>
      <p>
        Protean RPG is completely free and open-source with a CC BY 4.0 license. You should always read the licensing yourself, but in general this means you are free to copy, redistribute, remix, or build upon any of the materials herein for any purpose, even <em>commercially!</em>
      </p>

      <h3>2. Modular</h3>
      <p>
        Part of the reason many "universal" RPG systems suffer is that they lack interesting mechanics or subsystems that are unique to many genres. A universal system might include brutal combat mechanics perfect for a military game, but have no system in place for solving mysteries. There will always be gaps in rulesets, but Protean aims to alleviate this by providing modular rule components. When creating a campaign everyone will decide which rules are included and excluded. This eases the burden on switching from a combat-heavy medieval game to a political hard science fiction game.
      </p>

      <h3>3. Collaborative Narrative</h3>
      <p>
        Every rule in Protean has been designed from the ground up to encourage story building from its players. Campaigns, scenarios, and even character creation involves asking players questions that will influence their world forever. Canon exists to be destroyed. To see an example, check out the Anti-Canon rule on TODO.
      </p>

      <h2>Ready To Play?</h2>
      <p>
        Head on over to the first chapter to read about playing Protean and how to get ready for your first game.
      </p>
    </article>
  );
}