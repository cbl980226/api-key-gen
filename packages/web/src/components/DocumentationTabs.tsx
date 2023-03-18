'use client'

import { FC } from 'react'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css'
import { nodejs, python } from '@/helpers/documentation-code'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import Code from '@/components/ui/Code'

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar forceVisible="y">
          <Code animated code={nodejs} language="javascript" show />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar forceVisible="y">
          <Code animated code={python} language="python" show />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  )
}

export default DocumentationTabs
