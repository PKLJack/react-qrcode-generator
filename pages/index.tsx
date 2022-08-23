import Head from "next/head"
import Image from "next/image"
import { Button, Container, Form, Grid, Icon, Segment } from "semantic-ui-react"
import React from "react"
import { QRCode } from "react-qrcode-logo"
import Footer from "../components/Footer"

const options = [
  { key: "150", text: "150x150", value: 150 },
  { key: "300", text: "300x300", value: 300 },
  { key: "500", text: "500x500", value: 500 },
]

export default function Home() {
  const [url, setUrl] = React.useState("")
  const [size, setSize] = React.useState(options[0].value) // [150, 300, 500]
  const [isGenerated, setIsGenerated] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)

  function handleUrlChange(
    e: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) {
    setIsLoading(true)
    setIsGenerated(false)
    setUrl(value)
  }

  function handleSizeChange(e: React.SyntheticEvent, value: number) {
    setSize(value)
  }

  function handleSubmit() {
    // console.log({ url: url, size: size })
    if (!url) {
      return
    }
    setIsLoading(false)
    setIsGenerated(true)
  }

  return (
    <>
      <Head>
        <title>QR Code Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="not-footer">
        <Segment as="header" inverted basic>
          <Container as="h1" textAlign="center">
            QR Code Generator
          </Container>
        </Segment>
        <Segment padded="very" basic>
          <Grid as="main" container stackable columns={2}>
            <Grid.Column>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  label="Website URL"
                  placeholder="Enter a URL"
                  name="url"
                  value={url}
                  onChange={(e, { value }) => handleUrlChange(e, value)}
                />
                <Form.Select
                  label="Size"
                  placeholder={options[0].text}
                  options={options}
                  name="size"
                  onChange={(e, { value }) =>
                    handleSizeChange(e, Number(value))
                  }
                />
                <Button type="submit" fluid>
                  Generate QR Code
                </Button>
              </Form>
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="middle">
              {isGenerated ? (
                <QRCode
                  // value="https://github.com/gcoro/react-qrcode-logo"
                  value={url}
                  size={size}
                />
              ) : (
                <Icon name="qrcode" size="massive" loading={false} disabled />
              )}
              {/* <Icon name="qrcode" size="massive" loading={true} /> */}
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
      <Footer />
    </>
  )
}
