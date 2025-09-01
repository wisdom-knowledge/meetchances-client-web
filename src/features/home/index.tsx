import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'

export default function HomeViewPage() {
  return (
    <>
      <Header fixed>
        <div className='ml-auto flex items-center space-x-4'>
          <ProfileDropdown />
        </div>
      </Header>

      <Main fixed>Home</Main>
    </>
  )
}
