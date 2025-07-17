/**
 * @param {import('react').PropsWithChildren} props
 */
export default function SideNotes(props) {
  const { children } = props;

  return <aside className='notes'>{children}</aside>;
}
