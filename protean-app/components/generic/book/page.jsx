import Surface, { SurfaceSection } from '../layout/surface'

export default function Page(props) {
  return (
    <Surface>
      <SurfaceSection>
        <article className="p-6 text-base font-normal">
          {props.children}
        </article>
      </SurfaceSection>
    </Surface>
  );
}