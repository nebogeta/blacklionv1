import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

import 'simplebar-react/dist/simplebar.min.css'

import DocumentationTabs from '@/components/DocumentationTabs'


export const metadata = {
  title: 'Blk epense app| Documentation',
  description: 'Free & open-source expense tracker app',
}

const page = () => {
  return (
    <div className='container max-w-7xl mx-auto mt-12'>
      <div className='flex flex-col items-center gap-6'>
        <LargeHeading>Create Expense</LargeHeading>
        <Paragraph>api/v1/blk-expenses</Paragraph>

        <DocumentationTabs />
      </div>
    </div>
  )
}

export default page