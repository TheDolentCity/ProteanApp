import Page from '../../../../components/generic/book/page'
import { ListBulleted, ListItem } from '../../../../components/generic/book/lists'
import Paragraph from '../../../../components/generic/book/paragraph'

export default function Grip() {
  return (
    <Page>
      <h1>Grip System</h1>
      <Paragraph>
        Every scene must start and end and grip is the mechanic that controls this. Every actor in a scene has a unique grip value. As your grip declines, so to does your control over the scene. When you run out of grip, you fall out of the scene entirely.
      </Paragraph>

      <h2>Grip Components</h2>
      <Paragraph>
        The Grip 
      </Paragraph>

      <h3>Grip Dice</h3>
      <Paragraph>
        These are the dice that you roll at the start of a scene. The sum of the dice is your grip for that scene. This means that your starting grip fluctuates from scene to scene. The Advocate may grant bonus grip (up to your maximum) based on your character's actions, planning, or other circumstances.
      </Paragraph>

      <h3>Grip Risk</h3>
      <Paragraph>
        If at any point you are below half of your maximum grip then you are considered at risk. In this state you may choose to leave the scene. How you leave the scene is up to you, but your character is unable to affect the scene or other actors in this scene after leaving. 
      </Paragraph>

      <h3>Grip Exhaustion</h3>
      <Paragraph spaceAfter="0">
        This occurs when your grip is equal to or falls below zero. At this point you must immediately leave the scene. How you leave the scene is up to the Advocate. The Advocate should determine this based on whoever or whatever caused you to lose grip. Consider the following examples: 
      </Paragraph>
      <ListBulleted>
        <ListItem>
          If a young, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your armor could become ruined, your skin scarred, and you could fall unconscious.
        </ListItem>
        <ListItem>
          If an elder, fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then your possessions could be destroyed and you could be on the brink of death without lifesaving medicine or magic.
        </ListItem>
        <ListItem>
          If Gorgomund, the King of Evil and the first fire-breathing dragon engulfs you in flame and your grip is exhausted as a result, then you could be killed instantly.
        </ListItem>
      </ListBulleted>

      <h2>
        Grip Exhaustion and Consent
      </h2>
      <Paragraph spaceAfter="0">
        While the grip exhaustion mechanic is a moment where the Advocate determines the outcome, ultimately the actor needs to consent to this outcome. The role of the Advocate is to understand the supporting cast and create realistic or interesting grip exhaustion outcomes based on the relevant cast members. The actor's responsibility is to be fair and try to recognize whether or not they accept this outcome.
      </Paragraph>
    </Page>
  );
}