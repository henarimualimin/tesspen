res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:image" content="image/farcaster.png" />
        <meta property="fc:frame:button:1" content="Green" />
        <meta property="fc:frame:button:2" content="Purple" />
        <meta property="fc:frame:button:3" content="Red" />
        <meta property="fc:frame:button:4" content="Blue" />
        <!-- Tambahkan tag meta lainnya sesuai kebutuhan -->
      </head>
      <body>
        <!-- Isi halaman disini -->
      </body>
    </html>
`);