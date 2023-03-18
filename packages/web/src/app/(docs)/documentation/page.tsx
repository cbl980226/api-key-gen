import DocumentationTabs from '@/components/DocumentationTabs'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

export default function Documentation() {
  return (
    <div className="pt-12 flex flex-col items-center gap-6">
      <LargeHeading>Marking a request</LargeHeading>
      <Paragraph variant="center">api/v1/similarity</Paragraph>

      <DocumentationTabs />
    </div>
  )
}
