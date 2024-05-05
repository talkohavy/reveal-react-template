/**
 * @param {import('react').PropsWithChildren<{
 *   aaa?: string
 * }>} props
 */
export default function SideNotes(props) {
  const { children } = props;

  return <aside className='notes'>{children}</aside>;
}
