/* eslint-disable max-len */

import { NftEntityType, NftTokenType } from "@/types/nft";

const nfts = [
  {
      id: "103",
      cursor: 103,
      nftAddress: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
      tokenId: "20581",
      nftPrice: 1500,
      dailyRentPrice: 90,
      collateralClaimed: true,
      lenderAddress: "0x48ddea6de8c0393a26e2590a3b724fc47abdcf22",
      paymentToken: "1",
      lentAt: "1627407065",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "15",
      type: NftEntityType.LENDING,
      assetUrl: "https://mooncat-data-api.herokuapp.com/image/20581",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
          name: "Acclimated​MoonCats",
          symbol: "????",
          totalSupply: "19254",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "MoonCat #20581: 0x0048a7bf44 (accessorized)",
      description: "An Adorable Yellow Smiling Spotted [MoonCat](https://purrse.mooncat.community/20581).",
      timeLastUpdated: "2022-11-10T21:57:12.985Z",
      rawMetadata: {
          license: "https://mooncat.community/mooncatlicense",
          image: "https://mooncat-data-api.herokuapp.com/image/20581",
          animation_url: "https://mooncat-data-api.herokuapp.com/dynamic/20581",
          external_url: "https://purrse.mooncat.community/20581",
          background_color: "000000",
          name: "MoonCat #20581: 0x0048a7bf44 (accessorized)",
          description: "An Adorable Yellow Smiling Spotted [MoonCat](https://purrse.mooncat.community/20581).",
          details: {
              twinSet: [
                  7091,
                  20581
              ],
              pattern: "spotted",
              facing: "right",
              hasMirrors: false,
              isAcclimated: true,
              rescueIndex: 20581,
              genesis: false,
              isPale: false,
              twinId: "293300526600b9e600e1ff66ffcf9980",
              litterId: "293300526600b9e600e1ff66ffcf9980",
              cloneSet: [
                  20581
              ],
              hasTwins: true,
              twinSetSize: 2,
              pale: false,
              owner: "0x9f71788fb306571f55005b434209f9f0a10f9869",
              lootprint: "Claimed",
              expression: "smiling",
              litter: [
                  2923,
                  7091,
                  12633,
                  20581
              ],
              litterSize: 4,
              rescuedBy: "0xeb95ad4882b03578c6cd118fda33c6ac1f8b436e",
              pose: "standing",
              contract: {
                  description: "MoonCatAcclimator",
                  address: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
                  capabilities: [
                      "ERC20",
                      NftTokenType,
                      "ERC998"
                  ],
                  tokenId: 20581
              },
              accessories: [
                  {
                      name: "Early Acclimator Helmet",
                      accessoryId: "1",
                      visible: true,
                      displayName: "#1 \"Early Acclimator Helmet\""
                  },
                  {
                      name: "Swing Ball",
                      accessoryId: "329",
                      visible: true,
                      displayName: "#329 \"Swing Ball\""
                  },
                  {
                      name: "This is fine.",
                      accessoryId: "18",
                      visible: true,
                      displayName: "#18 \"This is fine.\""
                  }
              ],
              mirrorSetSize: 1,
              mirrorId: "293300526600b9e600e1ff66ffcf9980",
              cloneSetSize: 1,
              classification: "rescue",
              kBin: "01001000",
              hueValue: 71,
              catId: "0x0048a7bf44",
              rescueYear: 2021,
              kInt: 72,
              hasClones: false,
              hue: "yellow",
              onlyChild: false,
              cloneId: "293300526600b9e600e1ff66ffcf9981",
              glow: [
                  167,
                  191,
                  68
              ],
              mirrorSet: [
                  20581
              ]
          },
          attributes: [
              {
                  value: "0x0048a7bf44",
                  trait_type: "MoonCat Id"
              },
              {
                  value: 20581,
                  trait_type: "Rescue Index",
                  max_value: 25439
              },
              {
                  value: "Rescue",
                  trait_type: "Classification"
              },
              {
                  value: "2021",
                  trait_type: "Rescue Year"
              },
              {
                  value: "Yellow Spotted",
                  trait_type: "Coat"
              },
              {
                  value: "Smiling",
                  trait_type: "Expression"
              },
              {
                  value: "Standing",
                  trait_type: "Pose"
              },
              {
                  value: "No",
                  trait_type: "Only Child?"
              },
              {
                  value: "Yes",
                  trait_type: "Has Twins?"
              },
              {
                  value: "No",
                  trait_type: "Has Mirrors?"
              },
              {
                  value: "No",
                  trait_type: "Has Clones?"
              },
              {
                  value: "Spotted",
                  trait_type: "Coat Pattern"
              },
              {
                  value: "Yellow",
                  trait_type: "Coat Hue"
              },
              {
                  value: "Normal",
                  trait_type: "Coat Saturation"
              },
              {
                  value: "No",
                  trait_type: "isNamed"
              },
              {
                  value: "Minted",
                  trait_type: "lootprint"
              },
              {
                  value: 71,
                  trait_type: "Hue",
                  max_value: 359
              },
              {
                  value: 3,
                  trait_type: "Total Accessories"
              },
              {
                  value: "#1: Early Acclimator Helmet",
                  trait_type: "Accessory"
              },
              {
                  value: "#329: Swing Ball",
                  trait_type: "Accessory"
              },
              {
                  value: "#18: This is fine.",
                  trait_type: "Accessory"
              }
          ]
      },
      tokenUri: {
          raw: "https://api.mooncat.community/traits/20581",
          gateway: "https://api.mooncat.community/traits/20581"
      },
      media: [
          {
              raw: "https://mooncat-data-api.herokuapp.com/image/20581",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/69e5f8cce01495781ccb6b3656c1e7e2",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/69e5f8cce01495781ccb6b3656c1e7e2",
              format: "png",
              bytes: 48425
          }
      ]
  },
  {
      id: "106",
      cursor: 106,
      nftAddress: "0x9d413b9434c20c73f509505f7fbc6fc591bbf04a",
      tokenId: "7085325",
      nftPrice: 5000,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0xbc2a432a01a64b5bdc9360c22b6603c60e96c867",
      paymentToken: "1",
      lentAt: "1627468549",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "100",
      type: NftEntityType.LENDING,
      assetUrl: "https://virus.folia.app/img/7085325",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x9d413b9434c20c73f509505f7fbc6fc591bbf04a",
          name: "FoliaVirus",
          symbol: "☣️",
          totalSupply: "757",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Kudzu No 108",
      description: "Kudzu is contagious, let the vine grow...\n\nThis is the token number 108 but it has ID 7085325 (0x6c1d0d) with ugh eyes (0x1d) and little-mad-2 mouth (0xd).",
      timeLastUpdated: "2022-07-02T12:28:10.914Z",
      rawMetadata: {
          image: "https://virus.folia.app/img/7085325",
          external_url: "https://folia.app/works/kudzu?token=7085325",
          home_url: "https://folia.app/works/kudzu?token=7085325",
          image_url: "https://virus.folia.app/img/7085325",
          name: "Kudzu No 108",
          description: "Kudzu is contagious, let the vine grow...\n\nThis is the token number 108 but it has ID 7085325 (0x6c1d0d) with ugh eyes (0x1d) and little-mad-2 mouth (0xd).",
          attributes: [
              {
                  value: "ugh",
                  trait_type: "eyes"
              },
              {
                  value: "little-mad-2",
                  trait_type: "mouth"
              }
          ],
          properties: [
              {
                  type: "string",
                  value: "ugh",
                  key: "eyes"
              },
              {
                  type: "string",
                  value: "little-mad-2",
                  key: "mouth"
              }
          ]
      },
      tokenUri: {
          raw: "https://virus.folia.app/metadata/7085325",
          gateway: "https://virus.folia.app/metadata/7085325"
      },
      media: [
          {
              raw: "https://virus.folia.app/img/7085325",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/07c04467efc22f1c070b02d67e714e09.jpg",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/07c04467efc22f1c070b02d67e714e09.jpg",
              format: "jpg",
              bytes: 13439
          }
      ]
  },
  {
      id: "11",
      cursor: 11,
      nftAddress: "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
      tokenId: "151493",
      nftPrice: 201608,
      dailyRentPrice: 20,
      collateralClaimed: true,
      lenderAddress: "0x426923e98e347158d5c471a9391edaea95516473",
      paymentToken: "1",
      lentAt: "1627058690",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "10",
      type: NftEntityType.LENDING,
      assetUrl: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/v3/preview-560px-x-560px.webp",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
          name: "Sandbox's LANDs",
          symbol: "LAND",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "LAND (-79, 167)",
      description: "A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).",
      timeLastUpdated: "2022-11-10T19:21:46.079Z",
      rawMetadata: {
          name: "LAND (-79, 167)",
          sandbox: {
              name: "EVANTAN BAYC LAND",
              image: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/preview.png"
          },
          description: "A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).",
          image: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/v3/preview-560px-x-560px.webp",
          external_url: "https://www.sandbox.game/en/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/",
          properties: [
              {
                  display_type: "number",
                  value: 125,
                  trait_type: "Land X",
                  max_value: 408
              },
              {
                  display_type: "number",
                  value: 371,
                  trait_type: "Land Y",
                  max_value: 408
              },
              {
                  value: "Premium",
                  trait_type: "Land Type"
              }
          ]
      },
      tokenUri: {
          raw: "https://api.sandbox.game/lands/151493/metadata.json",
          gateway: "https://api.sandbox.game/lands/151493/metadata.json"
      },
      media: [
          {
              raw: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/v3/preview-560px-x-560px.webp",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/699e71cb8cd392cfa7be16eb8c27f53f",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/699e71cb8cd392cfa7be16eb8c27f53f",
              format: "webp",
              bytes: 132114
          }
      ]
  },
  {
      id: "111",
      cursor: 111,
      nftAddress: "0xd4d871419714b778ebec2e22c7c53572b573706e",
      tokenId: "3887",
      nftPrice: 5000,
      dailyRentPrice: 850,
      collateralClaimed: true,
      lenderAddress: "0xcdf0437d2dde9307204f330dc6debd2d29cc9d11",
      paymentToken: "1",
      lentAt: "1627670552",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "1",
      type: NftEntityType.LENDING,
      assetUrl: "https://go.fission.app/json/3887/image.jpg",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xd4d871419714b778ebec2e22c7c53572b573706e",
          name: "Stoner Cats",
          symbol: "TOKEn",
          totalSupply: "10420",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Stoner Cats #3887",
      description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
      timeLastUpdated: "2022-11-10T03:09:52.295Z",
      rawMetadata: {
          name: "Stoner Cats #3887",
          description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
          image: "https://go.fission.app/json/3887/image.jpg",
          attributes: [
              {
                  value: "Dave",
                  trait_type: "Name"
              },
              {
                  value: "Hazy Blue",
                  trait_type: "Backdrops"
              },
              {
                  value: "Puff Puff Pass",
                  trait_type: "Left Arm"
              },
              {
                  value: "Hang Loose",
                  trait_type: "Right Arm"
              },
              {
                  value: "Green",
                  trait_type: "Collars"
              },
              {
                  value: "Dopey",
                  trait_type: "Eyes"
              },
              {
                  value: "Naked",
                  trait_type: "Accessories"
              },
              {
                  value: "Naked",
                  trait_type: "Expressions"
              }
          ]
      },
      tokenUri: {
          raw: "https://go.fission.app/json/3887/index.json",
          gateway: "https://go.fission.app/json/3887/index.json"
      },
      media: [
          {
              raw: "https://go.fission.app/json/3887/image.jpg",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/2f6e6944ea683ff838b368e395ea45b1",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/2f6e6944ea683ff838b368e395ea45b1",
              format: "jpeg",
              bytes: 356019
          }
      ]
  },
  {
      id: "112",
      cursor: 112,
      nftAddress: "0x3a8778a58993ba4b941f85684d74750043a4bb5f",
      tokenId: "843",
      nftPrice: 65536,
      dailyRentPrice: 500,
      collateralClaimed: false,
      lenderAddress: "0x12ffd3da051feafe38d5420bf08ef112f1dfc7c2",
      paymentToken: "1",
      lentAt: "1627712703",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "30",
      type: NftEntityType.LENDING,
      assetUrl: "https://ipfs.io/ipfs/QmVm8kiuFkDczsnRBWTadGvf78LAzLFu8FxWRrPnaDwY1F",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x3a8778a58993ba4b941f85684d74750043a4bb5f",
          name: "BullsOnTheBlock",
          symbol: "BOTB",
          totalSupply: "10000",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Oh was not set",
      description: "Not specified",
      timeLastUpdated: "2022-11-10T09:05:09.117Z",
      rawMetadata: {
          image: "https://ipfs.io/ipfs/QmVm8kiuFkDczsnRBWTadGvf78LAzLFu8FxWRrPnaDwY1F",
          attributes: [
              {
                  value: "Bull",
                  trait_type: "Species"
              },
              {
                  value: "City Doodle",
                  trait_type: "Background"
              },
              {
                  value: "Brown spotted",
                  trait_type: "Fur"
              },
              {
                  value: "Big Smile",
                  trait_type: "Mouth"
              },
              {
                  value: "Surprised",
                  trait_type: "Eyes"
              },
              {
                  value: "Blue",
                  trait_type: "Horns"
              },
              {
                  value: "Blue Tank Top",
                  trait_type: "Clothes"
              },
              {
                  value: "Horn",
                  trait_type: "Chain"
              }
          ]
      },
      tokenUri: {
          raw: "https://bullsontheblock.com/api/tokens/843",
          gateway: "https://bullsontheblock.com/api/tokens/843"
      },
      media: [
          {
              raw: "https://ipfs.io/ipfs/QmVm8kiuFkDczsnRBWTadGvf78LAzLFu8FxWRrPnaDwY1F",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/b64e0e98c7da63be39e8387d1821cd43.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/b64e0e98c7da63be39e8387d1821cd43.png",
              format: "png",
              bytes: 312147
          }
      ]
  },
  {
      id: "116",
      cursor: 116,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "100259785915172647746245848954213430034851451612620645515944082807742132770546",
      nftPrice: 500,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x263108604e0c9e1f6cdcf698e160cd563635a328",
      paymentToken: "1",
      lentAt: "1627885707",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "28",
      type: NftEntityType.LENDING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "moonrocket.eth",
      description: "moonrocket.eth, an ENS name.",
      timeLastUpdated: "2022-10-31T11:57:11.629Z",
      rawMetadata: {
          background_image: "https://metadata.ens.domains/mainnet/avatar/moonrocket.eth",
          image: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
          is_normalized: true,
          segment_length: 10,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
          name: "moonrocket.eth",
          description: "moonrocket.eth, an ENS name.",
          attributes: [
              {
                  display_type: "date",
                  value: 1498799085000,
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 10,
                  trait_type: "Length"
              },
              {
                  display_type: "number",
                  value: 10,
                  trait_type: "Segment Length"
              },
              {
                  display_type: "string",
                  value: "letter",
                  trait_type: "Character Set"
              },
              {
                  display_type: "date",
                  value: 1660365492000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1755036348000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 10,
          version: 0,
          url: "https://app.ens.domains/name/moonrocket.eth"
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2"
      },
      media: [
          {
              raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
              gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image"
          }
      ]
  },
  {
      id: "124",
      cursor: 124,
      nftAddress: "0x6b47e7066c7db71aa04a1d5872496fe05c4c331f",
      tokenId: "178",
      nftPrice: 32768000,
      dailyRentPrice: 983040,
      collateralClaimed: true,
      lenderAddress: "0x4cb01b6672bc750821af952ec5a2447fc90195b1",
      paymentToken: "2",
      lentAt: "1628109691",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "7",
      type: NftEntityType.LENDING,
      assetUrl: "https://peer-ec1.decentraland.org/content/contents/QmWQ2k6UXgqt8rLjprgfKkVMSqJH2Qyaehq5MneezeFg8w",
      paymentTokenName: "WETH",
      contract: {
          address: "0x6b47e7066c7db71aa04a1d5872496fe05c4c331f",
          name: "dcl://rtfkt_x_atari",
          symbol: "DCLRTFTKTI",
          totalSupply: "678",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Purple RTFKT X Atari Sneakers",
      description: "DCL Wearable 178/1000",
      timeLastUpdated: "2022-10-29T15:21:48.510Z",
      rawMetadata: {
          image: "https://peer-ec1.decentraland.org/content/contents/QmWQ2k6UXgqt8rLjprgfKkVMSqJH2Qyaehq5MneezeFg8w",
          thumbnail: "https://peer-ec1.decentraland.org/content/contents/Qmb9K4vMYFFqpffmuh2BwkU3ShrMMVHckG7czk2p3t8ieZ",
          name: "Purple RTFKT X Atari Sneakers",
          description: "DCL Wearable 178/1000",
          language: "en-US",
          attributes: [
              {
                  value: "epic",
                  trait_type: "Rarity"
              },
              {
                  value: "feet",
                  trait_type: "Category"
              },
              {
                  value: "sneakers",
                  trait_type: "Tag"
              },
              {
                  value: "purple",
                  trait_type: "Tag"
              },
              {
                  value: "atari",
                  trait_type: "Tag"
              },
              {
                  value: "rtfkt",
                  trait_type: "Tag"
              },
              {
                  value: "pong",
                  trait_type: "Tag"
              },
              {
                  value: "trainers",
                  trait_type: "Tag"
              },
              {
                  value: "unique",
                  trait_type: "Tag"
              },
              {
                  value: "retro",
                  trait_type: "Tag"
              },
              {
                  value: "collab",
                  trait_type: "Tag"
              },
              {
                  value: "hologram",
                  trait_type: "Tag"
              },
              {
                  value: "blue",
                  trait_type: "Tag"
              },
              {
                  value: "pink",
                  trait_type: "Tag"
              },
              {
                  value: "exclusive",
                  trait_type: "Tag"
              }
          ],
          id: "urn:decentraland:ethereum:collections-v1:rtfkt_x_atari:p_rtfkt_x_atari_feet"
      },
      tokenUri: {
          raw: "https://wearable-api.decentraland.org/v2/standards/erc721-metadata/collections/rtfkt_x_atari/wearables/p_rtfkt_x_atari_feet/178",
          gateway: "https://wearable-api.decentraland.org/v2/standards/erc721-metadata/collections/rtfkt_x_atari/wearables/p_rtfkt_x_atari_feet/178"
      },
      media: [
          {
              raw: "https://peer-ec1.decentraland.org/content/contents/QmWQ2k6UXgqt8rLjprgfKkVMSqJH2Qyaehq5MneezeFg8w",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/dc17dbbe7e7cdbed2738c2be4ad159e3.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/dc17dbbe7e7cdbed2738c2be4ad159e3.png",
              format: "png",
              bytes: 277574
          }
      ]
  },
  {
      id: "126",
      cursor: 126,
      nftAddress: "0xd4d871419714b778ebec2e22c7c53572b573706e",
      tokenId: "8998",
      nftPrice: 65536,
      dailyRentPrice: 100,
      collateralClaimed: true,
      lenderAddress: "0x8bd49c4038bae512e46b1406f3204bfa0715f73a",
      paymentToken: "1",
      lentAt: "1628131747",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "7",
      type: NftEntityType.LENDING,
      assetUrl: "https://go.fission.app/json/8998/image.jpg",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xd4d871419714b778ebec2e22c7c53572b573706e",
          name: "Stoner Cats",
          symbol: "TOKEn",
          totalSupply: "10420",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Stoner Cats #8998",
      description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
      timeLastUpdated: "2022-11-10T21:33:45.886Z",
      rawMetadata: {
          name: "Stoner Cats #8998",
          description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
          image: "https://go.fission.app/json/8998/image.jpg",
          attributes: [
              {
                  value: "Hammy",
                  trait_type: "Name"
              },
              {
                  value: "Weed Green",
                  trait_type: "Backdrops"
              },
              {
                  value: "Puff Puff Pass",
                  trait_type: "Left Arm"
              },
              {
                  value: "Lighter",
                  trait_type: "Right Arm"
              },
              {
                  value: "Yellow",
                  trait_type: "Collars"
              },
              {
                  value: "Naked",
                  trait_type: "Eyes"
              },
              {
                  value: "Kitty Cap",
                  trait_type: "Accessories"
              },
              {
                  value: "Ruh-roh",
                  trait_type: "Expressions"
              }
          ]
      },
      tokenUri: {
          raw: "https://go.fission.app/json/8998/index.json",
          gateway: "https://go.fission.app/json/8998/index.json"
      },
      media: [
          {
              raw: "https://go.fission.app/json/8998/image.jpg",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/0c6ea5b6f7ea3a1e1e22aa0b43254819",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/0c6ea5b6f7ea3a1e1e22aa0b43254819",
              format: "jpeg",
              bytes: 333627
          }
      ]
  },
  {
      id: "134",
      cursor: 134,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "81089703431117778499039095787558921261590138106147275490437694069174079406367",
      nftPrice: 5000,
      dailyRentPrice: 3,
      collateralClaimed: false,
      lenderAddress: "0x9b2ce2c8483e3dc0dc2e4d6580335d0204c89962",
      paymentToken: "1",
      lentAt: "1628619397",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "100",
      type: NftEntityType.LENDING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xb347254b3dbfe9d7d0d22caa27ebe2e016cf064633eb841b4d6879a51181411f/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "challange.eth",
      description: "challange.eth, an ENS name.",
      timeLastUpdated: "2022-11-10T20:41:53.058Z",
      rawMetadata: {
          background_image: "https://metadata.ens.domains/mainnet/avatar/challange.eth",
          image: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xb347254b3dbfe9d7d0d22caa27ebe2e016cf064633eb841b4d6879a51181411f/image",
          is_normalized: true,
          segment_length: 9,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xb347254b3dbfe9d7d0d22caa27ebe2e016cf064633eb841b4d6879a51181411f/image",
          name: "challange.eth",
          description: "challange.eth, an ENS name.",
          attributes: [
              {
                  display_type: "date",
                  value: 1581116161000,
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 9,
                  trait_type: "Length"
              },
              {
                  display_type: "number",
                  value: 9,
                  trait_type: "Segment Length"
              },
              {
                  display_type: "string",
                  value: "letter",
                  trait_type: "Character Set"
              },
              {
                  display_type: "date",
                  value: 1649560871000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1681117823000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 9,
          version: 0,
          url: "https://app.ens.domains/name/challange.eth"
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xb347254b3dbfe9d7d0d22caa27ebe2e016cf064633eb841b4d6879a51181411f",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xb347254b3dbfe9d7d0d22caa27ebe2e016cf064633eb841b4d6879a51181411f"
      },
      media: [
          {
              raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xb347254b3dbfe9d7d0d22caa27ebe2e016cf064633eb841b4d6879a51181411f/image",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/93997a84c8794388b64d8875eb863662",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/93997a84c8794388b64d8875eb863662",
              format: "svg+xml",
              bytes: 101094
          }
      ]
  },
  {
      id: "135",
      cursor: 135,
      nftAddress: "0x14b76477739b4eeeab7af197f638d882373b8329",
      tokenId: "46",
      nftPrice: 8000,
      dailyRentPrice: 20,
      collateralClaimed: false,
      lenderAddress: "0x4ff93c87a18340212d5b146eb49fc514964f7cbb",
      paymentToken: "1",
      lentAt: "1628669497",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "7",
      type: NftEntityType.LENDING,
      assetUrl: "https://s3.us-east-2.amazonaws.com/mintable.app/MintableDiscountCards.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x14b76477739b4eeeab7af197f638d882373b8329",
          name: "Mintable",
          symbol: "MTB",
          totalSupply: "61",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Mintable Discount cards",
      description: "Mintable Discount cards",
      timeLastUpdated: "2022-06-11T15:55:47.365Z",
      rawMetadata: {
          image: "https://s3.us-east-2.amazonaws.com/mintable.app/MintableDiscountCards.png",
          website: "https://mintable.app",
          external_url: "https://mintable.app/discountcards",
          home_url: "https://mintable.app",
          image_url: "https://s3.us-east-2.amazonaws.com/mintable.app/MintableDiscountCards.png",
          name: "Mintable Discount cards",
          description: "Mintable Discount cards"
      },
      tokenUri: {
          raw: "https://mintable.app/discount-cards",
          gateway: "https://mintable.app/discount-cards"
      },
      media: [
          {
              raw: "https://s3.us-east-2.amazonaws.com/mintable.app/MintableDiscountCards.png",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/6b81e23bc30c8c866d2b3ff53470080b.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/6b81e23bc30c8c866d2b3ff53470080b.png",
              format: "png",
              bytes: 4688688
          }
      ]
  },
  {
      id: "137",
      cursor: 137,
      nftAddress: "0x7870cc63b6b1af0aed0d6dd7c1efb39300b773eb",
      tokenId: "1493",
      nftPrice: 6900,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x243706e13823949dca2283ce5607f618d9d17c31",
      paymentToken: "1",
      lentAt: "1628824876",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "30",
      type: NftEntityType.LENDING,
      assetUrl: "https://gateway.pinata.cloud/ipfs/QmcgA7sNGSUwxCYYtJuYrLxTTmp9185g9uQDuKrgx736b1/1493.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x7870cc63b6b1af0aed0d6dd7c1efb39300b773eb",
          name: "Untamed Companion",
          symbol: "UC",
          totalSupply: "3704",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Untamed Companion #1493",
      description: "Not specified",
      timeLastUpdated: "2022-11-10T22:10:36.622Z",
      rawMetadata: {
          name: "Untamed Companion #1493",
          image: "https://gateway.pinata.cloud/ipfs/QmcgA7sNGSUwxCYYtJuYrLxTTmp9185g9uQDuKrgx736b1/1493.png",
          attributes: [
              {
                  value: "Black-Halo",
                  trait_type: "Head"
              },
              {
                  value: "Space Suit",
                  trait_type: "Torso"
              },
              {
                  value: "Corrupted Shades",
                  trait_type: "Eyes"
              },
              {
                  value: "Cigarette",
                  trait_type: "Mouth"
              },
              {
                  value: "Gold Double Hoop",
                  trait_type: "Earring"
              },
              {
                  value: "White",
                  trait_type: "Beak/Feet"
              },
              {
                  value: "Zombie",
                  trait_type: "Skin"
              },
              {
                  value: "Light Dark Purple",
                  trait_type: "Background"
              }
          ]
      },
      tokenUri: {
          raw: "https://gateway.pinata.cloud/ipfs/QmStQr71p68cF7Vtk3FCegLgL5g5rjvgpVuEc1hh2AgJKi/1493",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmStQr71p68cF7Vtk3FCegLgL5g5rjvgpVuEc1hh2AgJKi/1493"
      },
      media: [
          {
              raw: "https://gateway.pinata.cloud/ipfs/QmcgA7sNGSUwxCYYtJuYrLxTTmp9185g9uQDuKrgx736b1/1493.png",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/da35a10211a431633da236ccad57005f.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/da35a10211a431633da236ccad57005f.png",
              format: "png",
              bytes: 1512870
          }
      ]
  },
  {
      id: "139",
      cursor: 139,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "27428416484006642314585243504927643578238882871549423173816902763765454520370",
      nftPrice: 2000,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x902a24c603676766ef67dc27f92a9b87ffe22982",
      paymentToken: "1",
      lentAt: "1629177027",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "1",
      type: NftEntityType.LENDING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x3ca3eeff42ccc378061fcaef788ce2f8bed4b054c98da301ee2507cfe3e2c032/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "[0x3ca3...c032].eth",
      description: "[0x3ca3...c032].eth, an ENS name. (⠀ethereum.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
      timeLastUpdated: "2022-11-10T21:59:47.294Z",
      rawMetadata: {
          image: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x3ca3eeff42ccc378061fcaef788ce2f8bed4b054c98da301ee2507cfe3e2c032/image",
          is_normalized: false,
          segment_length: 9,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x3ca3eeff42ccc378061fcaef788ce2f8bed4b054c98da301ee2507cfe3e2c032/image",
          name: "[0x3ca3...c032].eth",
          description: "[0x3ca3...c032].eth, an ENS name. (⠀ethereum.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
          attributes: [
              {
                  display_type: "date",
                  value: 1617569568000,
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 9,
                  trait_type: "Length"
              },
              {
                  display_type: "number",
                  value: 9,
                  trait_type: "Segment Length"
              },
              {
                  display_type: "string",
                  value: "mixed",
                  trait_type: "Character Set"
              },
              {
                  display_type: "date",
                  value: 1617569568000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1680683472000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 9,
          version: 0
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x3ca3eeff42ccc378061fcaef788ce2f8bed4b054c98da301ee2507cfe3e2c032",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x3ca3eeff42ccc378061fcaef788ce2f8bed4b054c98da301ee2507cfe3e2c032"
      },
      media: [
          {
              raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x3ca3eeff42ccc378061fcaef788ce2f8bed4b054c98da301ee2507cfe3e2c032/image",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/63f5ee71c5a8b1c507f8f0ab1dde1463",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/63f5ee71c5a8b1c507f8f0ab1dde1463",
              format: "svg+xml",
              bytes: 106191
          }
      ]
  },
  {
      id: "140",
      cursor: 140,
      nftAddress: "0xe71cd39b62667519f35274c393271daa5048b8ce",
      tokenId: "2448",
      nftPrice: 2000,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0xed96d9ca875a2c7dc5c1c2934819f79bdeef24bf",
      paymentToken: "1",
      lentAt: "1629177762",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "1",
      type: NftEntityType.LENDING,
      assetUrl: "https://lh3.googleusercontent.com/pdCMwdwAWaokV67oTuZqV5zmRQ-VY6UeT9w2bipOhIEtT2qzDGEDorwx9LcvatgGeFI5PBmBfkWHowLcVGwJXqqz1f_fGBky6tPb",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xe71cd39b62667519f35274c393271daa5048b8ce",
          name: "EntropySeeds",
          symbol: "HSEED",
          totalSupply: "2623",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Entropyseed #2448",
      description: "AI Generated Abstract art. Chaos into beauty. Seed #2448",
      timeLastUpdated: "2022-06-01T22:42:21.226Z",
      rawMetadata: {
          name: "Entropyseed #2448",
          description: "AI Generated Abstract art. Chaos into beauty. Seed #2448",
          image: "https://lh3.googleusercontent.com/pdCMwdwAWaokV67oTuZqV5zmRQ-VY6UeT9w2bipOhIEtT2qzDGEDorwx9LcvatgGeFI5PBmBfkWHowLcVGwJXqqz1f_fGBky6tPb",
          attributes: [
              {
                  trait_count: 1548,
                  value: "Yes",
                  trait_type: "Before Reveal"
              },
              {
                  trait_count: 822,
                  value: "No",
                  trait_type: "OG"
              },
              {
                  trait_count: 1551,
                  value: "No",
                  trait_type: "Ultra-rare"
              }
          ]
      },
      media: [
          {
              raw: "https://lh3.googleusercontent.com/pdCMwdwAWaokV67oTuZqV5zmRQ-VY6UeT9w2bipOhIEtT2qzDGEDorwx9LcvatgGeFI5PBmBfkWHowLcVGwJXqqz1f_fGBky6tPb",
              gateway: "https://lh3.googleusercontent.com/pdCMwdwAWaokV67oTuZqV5zmRQ-VY6UeT9w2bipOhIEtT2qzDGEDorwx9LcvatgGeFI5PBmBfkWHowLcVGwJXqqz1f_fGBky6tPb"
          }
      ]
  },
  {
      id: "141",
      cursor: 141,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "34986437035383913738450534427909329307172872361642335618356871296476263705484",
      nftPrice: 5000,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x8b8aa68c016be15f2920ebac6d3c996f6e88048f",
      paymentToken: "1",
      lentAt: "1629178099",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "1",
      type: NftEntityType.LENDING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x4d599f226c3f607cabd0458b39d90798bdd589fc5fadc6c8f19d245f560f6b8c/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "[0x4d59...6b8c].eth",
      description: "[0x4d59...6b8c].eth, an ENS name. (⠀eth.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
      timeLastUpdated: "2022-03-04T19:45:04.616Z",
      rawMetadata: {
          is_normalized: false,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x4d599f226c3f607cabd0458b39d90798bdd589fc5fadc6c8f19d245f560f6b8c/image",
          name: "[0x4d59...6b8c].eth",
          description: "[0x4d59...6b8c].eth, an ENS name. (⠀eth.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
          attributes: [
              {
                  display_type: "date",
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 4,
                  trait_type: "Length"
              },
              {
                  display_type: "date",
                  value: 1617569352000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1649126304000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 4,
          version: 0
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/34986437035383913738450534427909329307172872361642335618356871296476263705484",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/34986437035383913738450534427909329307172872361642335618356871296476263705484"
      },
      media: []
  },
  {
      id: "142",
      cursor: 142,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "87893859676507660101239357928366715883153398510458713466193661973956762278732",
      nftPrice: 6553600,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0xfa6afbdc71ab14d3b93a659e910895be78924d91",
      paymentToken: "1",
      lentAt: "1629178803",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "1",
      type: NftEntityType.LENDING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xc252296132957b84c88112677b383235a0cad5dd97776f2c73f78682da041b4c/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "[0xc252...1b4c].eth",
      description: "[0xc252...1b4c].eth, an ENS name. (v‍‍‍‍‍.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
      timeLastUpdated: "2022-11-10T22:57:54.762Z",
      rawMetadata: {
          image: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xc252296132957b84c88112677b383235a0cad5dd97776f2c73f78682da041b4c/image",
          is_normalized: false,
          segment_length: 1,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xc252296132957b84c88112677b383235a0cad5dd97776f2c73f78682da041b4c/image",
          name: "[0xc252...1b4c].eth",
          description: "[0xc252...1b4c].eth, an ENS name. (v‍‍‍‍‍.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
          attributes: [
              {
                  display_type: "date",
                  value: 1617586709000,
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 6,
                  trait_type: "Length"
              },
              {
                  display_type: "number",
                  value: 1,
                  trait_type: "Segment Length"
              },
              {
                  display_type: "string",
                  value: "mixed",
                  trait_type: "Character Set"
              },
              {
                  display_type: "date",
                  value: 1617586709000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1680700613000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 6,
          version: 0
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xc252296132957b84c88112677b383235a0cad5dd97776f2c73f78682da041b4c",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xc252296132957b84c88112677b383235a0cad5dd97776f2c73f78682da041b4c"
      },
      media: [
          {
              raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xc252296132957b84c88112677b383235a0cad5dd97776f2c73f78682da041b4c/image",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/180a7fe6cc366a64e048707d454bd3eb",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/180a7fe6cc366a64e048707d454bd3eb",
              format: "svg+xml",
              bytes: 106191
          }
      ]
  },
  {
      id: "143",
      cursor: 143,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "7220056614118103923358515235154455370737560527847341487194119938826327647786",
      nftPrice: 6553600,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x8df338f0a0f644c32e00ae18c0d5ee33d84cf9d6",
      paymentToken: "1",
      lentAt: "1629179941",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "1",
      type: NftEntityType.LENDING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x0ff6684003945ea5c71890c25b88c0b373425a8a96b80d9475c1be7e4b31662a/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "[0x0ff6...662a].eth",
      description: "[0x0ff6...662a].eth, an ENS name. (my‍.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
      timeLastUpdated: "2022-03-04T20:10:03.455Z",
      rawMetadata: {
          is_normalized: false,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0x0ff6684003945ea5c71890c25b88c0b373425a8a96b80d9475c1be7e4b31662a/image",
          name: "[0x0ff6...662a].eth",
          description: "[0x0ff6...662a].eth, an ENS name. (my‍.eth is not in normalized form) ⚠️ ATTENTION: This name contains non-ASCII characters as shown above. Please be aware that there are characters that look identical or very similar to English letters, especially characters from Cyrillic and Greek. Also, traditional Chinese characters can look identical or very similar to simplified variants. For more information: https://en.wikipedia.org/wiki/IDN_homograph_attack",
          attributes: [
              {
                  display_type: "date",
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 2,
                  trait_type: "Length"
              },
              {
                  display_type: "date",
                  value: 1617585371000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1649142323000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 2,
          version: 0
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/7220056614118103923358515235154455370737560527847341487194119938826327647786",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/7220056614118103923358515235154455370737560527847341487194119938826327647786"
      },
      media: []
  },
  {
      id: "146",
      cursor: 146,
      nftAddress: "0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d",
      tokenId: "1001303602",
      nftPrice: 65536,
      dailyRentPrice: 20,
      collateralClaimed: false,
      lenderAddress: "0xf3eddce8fb1215c9d9949a804dc252ae76be3daf",
      paymentToken: "1",
      lentAt: "1629315939",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "10",
      type: NftEntityType.LENDING,
      assetUrl: "https://assets.polkamon.com/images/Unimons_T04C03H08B01G00.jpg",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x85f0e02cb992aa1f9f47112f815f519ef1a59e2d",
          name: "PolkamonOfficialCollection",
          symbol: "PMONC",
          totalSupply: "33182",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Uniturtle",
      description: "Recognized from afar by its special movements, the Uniturtle glides across terrain with ease. They also have maximum eyesight for their surroundings with their snug-fitting goggles.",
      timeLastUpdated: "2022-10-26T19:04:26.559Z",
      rawMetadata: {
          opening_network: "Ethereum",
          image: "https://assets.polkamon.com/images/Unimons_T04C03H08B01G00.jpg",
          animation_url: "https://assets.polkamon.com/videos/Unimons_T04C03H08B01G00.mp4",
          chain: "eth",
          code: "T04C03H08B01G00",
          description: "Recognized from afar by its special movements, the Uniturtle glides across terrain with ease. They also have maximum eyesight for their surroundings with their snug-fitting goggles.",
          rarityCapped: 13.6784,
          external_url: "https://polkamon.com/polkamon/T04C03H08B01G00",
          boosterId: 434534,
          background_color: "FFFFFF",
          initialProbabilities: {
              glitter: 0.99,
              horn: 0.16,
              color: 0.25,
              type: 0.06,
              background: 1
          },
          nftContract: "polychainmonsters",
          name: "Uniturtle",
          randomNumber: "0xe800c030166d4a303c9ccb677618b4a846f567a589ebaca349c245245cb0b004",
          chainGroup: "ETHEREUM",
          attributes: [
              {
                  value: "Uniturtle",
                  trait_type: "Type"
              },
              {
                  value: "Candy Cane",
                  trait_type: "Horn"
              },
              {
                  value: "Blue",
                  trait_type: "Color"
              },
              {
                  value: "Grassland",
                  trait_type: "Background"
              },
              {
                  value: "None",
                  trait_type: "Glitter"
              },
              {
                  display_type: "date",
                  value: 1629048794,
                  trait_type: "Birthday"
              },
              {
                  display_type: "number",
                  value: 434534,
                  trait_type: "Booster"
              },
              {
                  value: 13.6784,
                  trait_type: "Rarity Points"
              },
              {
                  value: "Ethereum",
                  trait_type: "Origin Chain"
              },
              {
                  value: "Ethereum",
                  trait_type: "Opening Network"
              }
          ],
          id: "1001303602",
          txHash: "0xdf95ce96d8dac3a8cc7e038d9761882eef8539e8547c0d1cccb3f46d4cc5e5da",
          rarity: 13.6784
      },
      tokenUri: {
          raw: "https://meta.polkamon.com/meta?id=1001303602",
          gateway: "https://meta.polkamon.com/meta?id=1001303602"
      },
      media: [
          {
              raw: "https://assets.polkamon.com/images/Unimons_T04C03H08B01G00.jpg",
              gateway: "https://assets.polkamon.com/images/Unimons_T04C03H08B01G00.jpg"
          }
      ]
  },
  {
      id: "147",
      cursor: 147,
      nftAddress: "0x91f7bb6900d65d004a659f34205beafc3b4e136c",
      tokenId: "2543",
      nftPrice: 7000,
      dailyRentPrice: 150,
      collateralClaimed: false,
      lenderAddress: "0x063933e834394026a89d9396e1b3da5fa10ed7d7",
      paymentToken: "1",
      lentAt: "1629319210",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "7",
      type: NftEntityType.LENDING,
      assetUrl: "https://gateway.pinata.cloud/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x91f7bb6900d65d004a659f34205beafc3b4e136c",
          name: "Derpy Birbs",
          symbol: "DerpyBirbs",
          totalSupply: "8192",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Derpy Birb #2543",
      description: "[Image (3000x3000)](https://gateway.pinata.cloud/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png)\n\n[PFP ready image (1350x1350)](https://gateway.pinata.cloud/ipfs/QmcftWLaqvMeTvrbArMFTATwjizbLneC7QXEewqkmRK6Mr/2543.png)\n\n[Transparent image (3000x3000)](https://gateway.pinata.cloud/ipfs/QmSf2eYuH7dm73bp5j9teBvkVifYUCEVztDBmCbB4MNryF/2543.png)\n\n[Transparent PFP ready image (1350x1350)](https://gateway.pinata.cloud/ipfs/Qmf2bGWTyke8rFwqU2WeK6N1VvCjTqcs3fT8YT3FgDivpG/2543.png)\n",
      timeLastUpdated: "2022-09-15T10:34:52.763Z",
      rawMetadata: {
          name: "Derpy Birb #2543",
          image: "https://gateway.pinata.cloud/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png",
          description: "[Image (3000x3000)](https://gateway.pinata.cloud/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png)\n\n[PFP ready image (1350x1350)](https://gateway.pinata.cloud/ipfs/QmcftWLaqvMeTvrbArMFTATwjizbLneC7QXEewqkmRK6Mr/2543.png)\n\n[Transparent image (3000x3000)](https://gateway.pinata.cloud/ipfs/QmSf2eYuH7dm73bp5j9teBvkVifYUCEVztDBmCbB4MNryF/2543.png)\n\n[Transparent PFP ready image (1350x1350)](https://gateway.pinata.cloud/ipfs/Qmf2bGWTyke8rFwqU2WeK6N1VvCjTqcs3fT8YT3FgDivpG/2543.png)\n",
          download: {
              image: "https://gateway.pinata.cloud/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png",
              imageProfile: "https://gateway.pinata.cloud/ipfs/QmcftWLaqvMeTvrbArMFTATwjizbLneC7QXEewqkmRK6Mr/2543.png",
              imageNBG: "https://gateway.pinata.cloud/ipfs/QmSf2eYuH7dm73bp5j9teBvkVifYUCEVztDBmCbB4MNryF/2543.png",
              imageNBGProfile: "https://gateway.pinata.cloud/ipfs/Qmf2bGWTyke8rFwqU2WeK6N1VvCjTqcs3fT8YT3FgDivpG/2543.png"
          },
          attributes: [
              {
                  value: "Hot Orange",
                  trait_type: "Body"
              },
              {
                  value: "Real Teal",
                  trait_type: "Background"
              },
              {
                  value: "Weed Bandana",
                  trait_type: "Hat"
              },
              {
                  value: "Monster Cigar",
                  trait_type: "Beak"
              },
              {
                  value: "Green Lashed",
                  trait_type: "Eyes"
              },
              {
                  value: "Purple",
                  trait_type: "Legs"
              },
              {
                  value: "Undies & Vest",
                  trait_type: "Clothes"
              },
              {
                  value: "Fire Emote",
                  trait_type: "Accessory#0"
              },
              {
                  value: "None",
                  trait_type: "Accessory#1"
              },
              {
                  value: "None",
                  trait_type: "Accessory#2"
              }
          ]
      },
      tokenUri: {
          raw: "ipfs://QmeCjS49kKLuXNhyTgN3X5F3hYv9RWRBVNDV3tMLVHDEeD/2543",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmeCjS49kKLuXNhyTgN3X5F3hYv9RWRBVNDV3tMLVHDEeD/2543"
      },
      media: [
          {
              raw: "https://gateway.pinata.cloud/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png",
              gateway: "https://ipfs.io/ipfs/QmbegGDHDzQjs67Nty9j5mdFwgTC2tsEfZTsS32VCkN3R2/2543.png"
          }
      ]
  },
  {
      id: "148",
      cursor: 148,
      nftAddress: "0x24d0cbd0d5d7b50212251c5dc7cb810e7af71f6a",
      tokenId: "1295",
      nftPrice: 1000,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x62819b319eaec0f5efba2043c784781b6be5aa13",
      paymentToken: "1",
      lentAt: "1629370972",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "15",
      type: NftEntityType.LENDING,
      assetUrl: "ipfs://QmPTpjvT9MNoBgta7KZgSBho8bztRaCktJgJZc8VMaDaGr/1295.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x24d0cbd0d5d7b50212251c5dc7cb810e7af71f6a",
          name: "Ape Harbour Yachts",
          symbol: "AHY",
          totalSupply: "7777",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Yacht 1295",
      description: "Not specified",
      timeLastUpdated: "2022-11-10T20:26:01.390Z",
      rawMetadata: {
          name: "Yacht 1295",
          image: "ipfs://QmPTpjvT9MNoBgta7KZgSBho8bztRaCktJgJZc8VMaDaGr/1295.png",
          attributes: [
              {
                  value: "Everglades Ape Park",
                  trait_type: "Background"
              },
              {
                  value: "Royal",
                  trait_type: "Hull"
              },
              {
                  value: "Wood",
                  trait_type: "Mast"
              },
              {
                  value: "Fireflys",
                  trait_type: "Sail"
              },
              {
                  value: "Classic",
                  trait_type: "Anchor"
              },
              {
                  value: "Ape Balloon",
                  trait_type: "Equipment"
              },
              {
                  value: "Jumping Board",
                  trait_type: "Equipment"
              },
              {
                  value: "Deckchair",
                  trait_type: "Equipment"
              },
              {
                  value: "Fireflys",
                  trait_type: "Equipment"
              },
              {
                  value: "Three Bananas",
                  trait_type: "Flag"
              },
              {
                  value: "Coconuts",
                  trait_type: "Equipment"
              },
              {
                  value: 78,
                  trait_type: "Speed"
              },
              {
                  value: 83,
                  trait_type: "Range"
              }
          ]
      },
      tokenUri: {
          raw: "data:application/json;base64,eyJuYW1lIjoiWWFjaHQgMTI5NSIsICJhdHRyaWJ1dGVzIjogW3sidHJhaXRfdHlwZSI6ICJCYWNrZ3JvdW5kIiwgInZhbHVlIjogIkV2ZXJnbGFkZXMgQXBlIFBhcmsifSwgeyJ0cmFpdF90eXBlIjogIkh1bGwiLCAidmFsdWUiOiAiUm95YWwifSwgeyJ0cmFpdF90eXBlIjogIk1hc3QiLCAidmFsdWUiOiAiV29vZCJ9LCB7InRyYWl0X3R5cGUiOiAiU2FpbCIsICJ2YWx1ZSI6ICJGaXJlZmx5cyJ9LCB7InRyYWl0X3R5cGUiOiAiQW5jaG9yIiwgInZhbHVlIjogIkNsYXNzaWMifSwgeyJ0cmFpdF90eXBlIjogIkVxdWlwbWVudCIsICJ2YWx1ZSI6ICJBcGUgQmFsbG9vbiJ9LCB7InRyYWl0X3R5cGUiOiAiRXF1aXBtZW50IiwgInZhbHVlIjogIkp1bXBpbmcgQm9hcmQifSwgeyJ0cmFpdF90eXBlIjogIkVxdWlwbWVudCIsICJ2YWx1ZSI6ICJEZWNrY2hhaXIifSwgeyJ0cmFpdF90eXBlIjogIkVxdWlwbWVudCIsICJ2YWx1ZSI6ICJGaXJlZmx5cyJ9LCB7InRyYWl0X3R5cGUiOiAiRmxhZyIsICJ2YWx1ZSI6ICJUaHJlZSBCYW5hbmFzIn0sIHsidHJhaXRfdHlwZSI6ICJFcXVpcG1lbnQiLCAidmFsdWUiOiAiQ29jb251dHMifSwgeyJ0cmFpdF90eXBlIjogIlNwZWVkIiwgInZhbHVlIjogNzh9LCB7InRyYWl0X3R5cGUiOiAiUmFuZ2UiLCAidmFsdWUiOiA4M31dLCAiaW1hZ2UiOiAiaXBmczovL1FtUFRwanZUOU1Ob0JndGE3S1pnU0JobzhienRSYUNrdEpnSlpjOFZNYURhR3IvMTI5NS5wbmcifQ==",
          gateway: ""
      },
      media: [
          {
              raw: "ipfs://QmPTpjvT9MNoBgta7KZgSBho8bztRaCktJgJZc8VMaDaGr/1295.png",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/81930dab95731e82472c84d8f3ded13c.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/81930dab95731e82472c84d8f3ded13c.png",
              format: "png",
              bytes: 189440
          }
      ]
  },
  {
      id: "149",
      cursor: 149,
      nftAddress: "0x882a47e6070aca3f38ce6929501f4787803a072b",
      tokenId: "4719",
      nftPrice: 65536,
      dailyRentPrice: 2000,
      collateralClaimed: false,
      lenderAddress: "0xabca2289f0d03773e8b102248997e854aa36cd21",
      paymentToken: "1",
      lentAt: "1629376308",
      lentAmount: "1",
      isERC721: true,
      maxRentDuration: "10",
      type: NftEntityType.LENDING,
      assetUrl: "https://dizzydragons.s3.amazonaws.com/500/current/4719.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x882a47e6070aca3f38ce6929501f4787803a072b",
          name: "DizzyDragons",
          symbol: "DIZZY",
          totalSupply: "5593",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Dizzy Dragon #4719",
      description: "Stay Dizzy.",
      timeLastUpdated: "2022-11-10T21:35:49.203Z",
      rawMetadata: {
          name: "Dizzy Dragon #4719",
          image: "https://dizzydragons.s3.amazonaws.com/500/current/4719.png",
          description: "Stay Dizzy.",
          attributes: [
              {
                  value: "Gray",
                  trait_type: "Background"
              },
              {
                  value: "Open",
                  trait_type: "Wings"
              },
              {
                  value: "Black",
                  trait_type: "Skin"
              },
              {
                  value: "Horns",
                  trait_type: "Headwear"
              },
              {
                  value: "Happy",
                  trait_type: "Eyes"
              },
              {
                  value: "Open",
                  trait_type: "Mouth"
              },
              {
                  value: "Unfused",
                  trait_type: "Type"
              }
          ],
          animation_url: "https://i.quantum.tech/dizzydragons/4719"
      },
      tokenUri: {
          raw: "https://dizzydragons.s3.amazonaws.com/metadata/current/4719",
          gateway: "https://dizzydragons.s3.amazonaws.com/metadata/current/4719"
      },
      media: [
          {
              raw: "https://dizzydragons.s3.amazonaws.com/500/current/4719.png",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/94bd9a3e0fdb8ebb9b26ca1cfae073e6",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/94bd9a3e0fdb8ebb9b26ca1cfae073e6",
              format: "png",
              bytes: 50919
          }
      ]
  },
  {
      __typename: "Lending",
      id: "103",
      cursor: 103,
      nftAddress: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
      tokenId: "20581",
      nftPrice: 1500,
      dailyRentPrice: 90,
      collateralClaimed: true,
      lenderAddress: "0x48ddea6de8c0393a26e2590a3b724fc47abdcf22",
      paymentToken: "1",
      lentAt: "1627407065",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://mooncat-data-api.herokuapp.com/image/20581",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
          name: "Acclimated​MoonCats",
          symbol: "????",
          totalSupply: "19254",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "MoonCat #20581: 0x0048a7bf44 (accessorized)",
      description: "An Adorable Yellow Smiling Spotted [MoonCat](https://purrse.mooncat.community/20581).",
      timeLastUpdated: "2022-11-10T21:57:12.985Z",
      rawMetadata: {
          license: "https://mooncat.community/mooncatlicense",
          image: "https://mooncat-data-api.herokuapp.com/image/20581",
          animation_url: "https://mooncat-data-api.herokuapp.com/dynamic/20581",
          external_url: "https://purrse.mooncat.community/20581",
          background_color: "000000",
          name: "MoonCat #20581: 0x0048a7bf44 (accessorized)",
          description: "An Adorable Yellow Smiling Spotted [MoonCat](https://purrse.mooncat.community/20581).",
          details: {
              twinSet: [
                  7091,
                  20581
              ],
              pattern: "spotted",
              facing: "right",
              hasMirrors: false,
              isAcclimated: true,
              rescueIndex: 20581,
              genesis: false,
              isPale: false,
              twinId: "293300526600b9e600e1ff66ffcf9980",
              litterId: "293300526600b9e600e1ff66ffcf9980",
              cloneSet: [
                  20581
              ],
              hasTwins: true,
              twinSetSize: 2,
              pale: false,
              owner: "0x9f71788fb306571f55005b434209f9f0a10f9869",
              lootprint: "Claimed",
              expression: "smiling",
              litter: [
                  2923,
                  7091,
                  12633,
                  20581
              ],
              litterSize: 4,
              rescuedBy: "0xeb95ad4882b03578c6cd118fda33c6ac1f8b436e",
              pose: "standing",
              contract: {
                  description: "MoonCatAcclimator",
                  address: "0xc3f733ca98e0dad0386979eb96fb1722a1a05e69",
                  capabilities: [
                      "ERC20",
                      NftTokenType,
                      "ERC998"
                  ],
                  tokenId: 20581
              },
              accessories: [
                  {
                      name: "Early Acclimator Helmet",
                      accessoryId: "1",
                      visible: true,
                      displayName: "#1 \"Early Acclimator Helmet\""
                  },
                  {
                      name: "Swing Ball",
                      accessoryId: "329",
                      visible: true,
                      displayName: "#329 \"Swing Ball\""
                  },
                  {
                      name: "This is fine.",
                      accessoryId: "18",
                      visible: true,
                      displayName: "#18 \"This is fine.\""
                  }
              ],
              mirrorSetSize: 1,
              mirrorId: "293300526600b9e600e1ff66ffcf9980",
              cloneSetSize: 1,
              classification: "rescue",
              kBin: "01001000",
              hueValue: 71,
              catId: "0x0048a7bf44",
              rescueYear: 2021,
              kInt: 72,
              hasClones: false,
              hue: "yellow",
              onlyChild: false,
              cloneId: "293300526600b9e600e1ff66ffcf9981",
              glow: [
                  167,
                  191,
                  68
              ],
              mirrorSet: [
                  20581
              ]
          },
          attributes: [
              {
                  value: "0x0048a7bf44",
                  trait_type: "MoonCat Id"
              },
              {
                  value: 20581,
                  trait_type: "Rescue Index",
                  max_value: 25439
              },
              {
                  value: "Rescue",
                  trait_type: "Classification"
              },
              {
                  value: "2021",
                  trait_type: "Rescue Year"
              },
              {
                  value: "Yellow Spotted",
                  trait_type: "Coat"
              },
              {
                  value: "Smiling",
                  trait_type: "Expression"
              },
              {
                  value: "Standing",
                  trait_type: "Pose"
              },
              {
                  value: "No",
                  trait_type: "Only Child?"
              },
              {
                  value: "Yes",
                  trait_type: "Has Twins?"
              },
              {
                  value: "No",
                  trait_type: "Has Mirrors?"
              },
              {
                  value: "No",
                  trait_type: "Has Clones?"
              },
              {
                  value: "Spotted",
                  trait_type: "Coat Pattern"
              },
              {
                  value: "Yellow",
                  trait_type: "Coat Hue"
              },
              {
                  value: "Normal",
                  trait_type: "Coat Saturation"
              },
              {
                  value: "No",
                  trait_type: "isNamed"
              },
              {
                  value: "Minted",
                  trait_type: "lootprint"
              },
              {
                  value: 71,
                  trait_type: "Hue",
                  max_value: 359
              },
              {
                  value: 3,
                  trait_type: "Total Accessories"
              },
              {
                  value: "#1: Early Acclimator Helmet",
                  trait_type: "Accessory"
              },
              {
                  value: "#329: Swing Ball",
                  trait_type: "Accessory"
              },
              {
                  value: "#18: This is fine.",
                  trait_type: "Accessory"
              }
          ]
      },
      tokenUri: {
          raw: "https://api.mooncat.community/traits/20581",
          gateway: "https://api.mooncat.community/traits/20581"
      },
      media: [
          {
              raw: "https://mooncat-data-api.herokuapp.com/image/20581",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/69e5f8cce01495781ccb6b3656c1e7e2",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/69e5f8cce01495781ccb6b3656c1e7e2",
              format: "png",
              bytes: 48425
          }
      ],
      renting: {
          id: "103",
          cursor: 10,
          renterAddress: "0x67fdbb7326a6de4194b1dfee2e1e212952f0092b",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "105",
      cursor: 105,
      nftAddress: "0xfaff15c6cdaca61a4f87d329689293e07c98f578",
      tokenId: "1",
      nftPrice: 1310720,
      dailyRentPrice: 65536,
      collateralClaimed: true,
      lenderAddress: "0xd39ea6043d1fa03f5be2beb2cfe65faa4ef0e595",
      paymentToken: "3",
      lentAt: "1627447207",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmeTNdovf1dzSadjqVRVJqz7szDTgWNjMB8JjwvVGXC3tZ",
      paymentTokenName: "DAI",
      contract: {
          address: "0xfaff15c6cdaca61a4f87d329689293e07c98f578",
          name: "Zapper NFT",
          symbol: "ZPR_NFT",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "The Zapper Pill",
      description: "You take the traditional finance pill, the story ends. You take the Zapper Pill, you stay in Wonderland and we show you how deep the DeFi rabbit hole goes.",
      timeLastUpdated: "2022-11-10T23:32:12.013Z",
      rawMetadata: {
          name: "The Zapper Pill",
          description: "You take the traditional finance pill, the story ends. You take the Zapper Pill, you stay in Wonderland and we show you how deep the DeFi rabbit hole goes.",
          image: "ipfs://QmeTNdovf1dzSadjqVRVJqz7szDTgWNjMB8JjwvVGXC3tZ",
          properties: {
              generation: "1",
              levelRequirement: "2"
          }
      },
      tokenUri: {
          raw: "ipfs://ipfs/QmRy89HP51SXuGm4AftR6YFGGbiw5hugRZU3aaoP2Eis5B",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmRy89HP51SXuGm4AftR6YFGGbiw5hugRZU3aaoP2Eis5B"
      },
      media: [
          {
              raw: "ipfs://QmeTNdovf1dzSadjqVRVJqz7szDTgWNjMB8JjwvVGXC3tZ",
              gateway: "https://ipfs.io/ipfs/QmeTNdovf1dzSadjqVRVJqz7szDTgWNjMB8JjwvVGXC3tZ"
          }
      ],
      renting: {
          id: "105",
          cursor: 16,
          renterAddress: "0x8b6e96947349c5efabd44bd8f8901d31951202c6",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "107",
      cursor: 107,
      nftAddress: "0x0db8c099b426677f575d512874d45a767e9acc3c",
      tokenId: "1",
      nftPrice: 32768000,
      dailyRentPrice: 1310720,
      collateralClaimed: true,
      lenderAddress: "0x75dc67127f851a3fefd38a9183a09803364c575c",
      paymentToken: "2",
      lentAt: "1627484931",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4",
      paymentTokenName: "WETH",
      contract: {
          address: "0x0db8c099b426677f575d512874d45a767e9acc3c",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Astrocat",
      description: "reNFT Genesis Card #1. To the Moon, Cat.",
      timeLastUpdated: "2022-11-10T18:55:48.586Z",
      rawMetadata: {
          name: "Astrocat",
          description: "reNFT Genesis Card #1. To the Moon, Cat.",
          image: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4"
      },
      tokenUri: {
          raw: "ipfs://QmSATVLXwpcCreYfzYxLzGUSqJYSFA8jthSMZ6rjxWWAzD/1",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmSATVLXwpcCreYfzYxLzGUSqJYSFA8jthSMZ6rjxWWAzD/1"
      },
      media: [
          {
              raw: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4",
              gateway: "https://ipfs.io/ipfs/QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4"
          }
      ],
      renting: {
          id: "107",
          cursor: 13,
          renterAddress: "0x000000041d22b34812630f07f7b3be152f430aa9",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "11",
      cursor: 11,
      nftAddress: "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
      tokenId: "151493",
      nftPrice: 201608,
      dailyRentPrice: 20,
      collateralClaimed: true,
      lenderAddress: "0x426923e98e347158d5c471a9391edaea95516473",
      paymentToken: "1",
      lentAt: "1627058690",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/v3/preview-560px-x-560px.webp",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
          name: "Sandbox's LANDs",
          symbol: "LAND",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "LAND (-79, 167)",
      description: "A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).",
      timeLastUpdated: "2022-11-10T19:21:46.079Z",
      rawMetadata: {
          name: "LAND (-79, 167)",
          sandbox: {
              name: "EVANTAN BAYC LAND",
              image: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/preview.png"
          },
          description: "A LAND is a digital piece of real estate in The Sandbox metaverse that players can buy to build experiences on top of. Once you own a LAND, you will be able to populate it with Games and Assets. Each LAND is a unique (non-fungible) token lying on the public Ethereum blockchain (ERC-721).",
          image: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/v3/preview-560px-x-560px.webp",
          external_url: "https://www.sandbox.game/en/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/",
          properties: [
              {
                  display_type: "number",
                  value: 125,
                  trait_type: "Land X",
                  max_value: 408
              },
              {
                  display_type: "number",
                  value: 371,
                  trait_type: "Land Y",
                  max_value: 408
              },
              {
                  value: "Premium",
                  trait_type: "Land Type"
              }
          ]
      },
      tokenUri: {
          raw: "https://api.sandbox.game/lands/151493/metadata.json",
          gateway: "https://api.sandbox.game/lands/151493/metadata.json"
      },
      media: [
          {
              raw: "https://api.sandbox.game/lands/d5c73c63-b074-4b47-89ea-5c8677132fe5/v3/preview-560px-x-560px.webp",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/699e71cb8cd392cfa7be16eb8c27f53f",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/699e71cb8cd392cfa7be16eb8c27f53f",
              format: "webp",
              bytes: 132114
          }
      ],
      renting: {
          id: "11",
          cursor: 28,
          renterAddress: "0x15f7320adb990020956d29edb6ba17f3d468001e",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "111",
      cursor: 111,
      nftAddress: "0xd4d871419714b778ebec2e22c7c53572b573706e",
      tokenId: "3887",
      nftPrice: 5000,
      dailyRentPrice: 850,
      collateralClaimed: true,
      lenderAddress: "0xcdf0437d2dde9307204f330dc6debd2d29cc9d11",
      paymentToken: "1",
      lentAt: "1627670552",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://go.fission.app/json/3887/image.jpg",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xd4d871419714b778ebec2e22c7c53572b573706e",
          name: "Stoner Cats",
          symbol: "TOKEn",
          totalSupply: "10420",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Stoner Cats #3887",
      description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
      timeLastUpdated: "2022-11-10T03:09:52.295Z",
      rawMetadata: {
          name: "Stoner Cats #3887",
          description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
          image: "https://go.fission.app/json/3887/image.jpg",
          attributes: [
              {
                  value: "Dave",
                  trait_type: "Name"
              },
              {
                  value: "Hazy Blue",
                  trait_type: "Backdrops"
              },
              {
                  value: "Puff Puff Pass",
                  trait_type: "Left Arm"
              },
              {
                  value: "Hang Loose",
                  trait_type: "Right Arm"
              },
              {
                  value: "Green",
                  trait_type: "Collars"
              },
              {
                  value: "Dopey",
                  trait_type: "Eyes"
              },
              {
                  value: "Naked",
                  trait_type: "Accessories"
              },
              {
                  value: "Naked",
                  trait_type: "Expressions"
              }
          ]
      },
      tokenUri: {
          raw: "https://go.fission.app/json/3887/index.json",
          gateway: "https://go.fission.app/json/3887/index.json"
      },
      media: [
          {
              raw: "https://go.fission.app/json/3887/image.jpg",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/2f6e6944ea683ff838b368e395ea45b1",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/2f6e6944ea683ff838b368e395ea45b1",
              format: "jpeg",
              bytes: 356019
          }
      ],
      renting: {
          id: "111",
          cursor: 15,
          renterAddress: "0xe7661cd7988c3a3f7b417ae10cbb7aff525ad921",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "116",
      cursor: 116,
      nftAddress: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
      tokenId: "100259785915172647746245848954213430034851451612620645515944082807742132770546",
      nftPrice: 500,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0x263108604e0c9e1f6cdcf698e160cd563635a328",
      paymentToken: "1",
      lentAt: "1627885707",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "moonrocket.eth",
      description: "moonrocket.eth, an ENS name.",
      timeLastUpdated: "2022-10-31T11:57:11.629Z",
      rawMetadata: {
          background_image: "https://metadata.ens.domains/mainnet/avatar/moonrocket.eth",
          image: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
          is_normalized: true,
          segment_length: 10,
          image_url: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
          name: "moonrocket.eth",
          description: "moonrocket.eth, an ENS name.",
          attributes: [
              {
                  display_type: "date",
                  value: 1498799085000,
                  trait_type: "Created Date"
              },
              {
                  display_type: "number",
                  value: 10,
                  trait_type: "Length"
              },
              {
                  display_type: "number",
                  value: 10,
                  trait_type: "Segment Length"
              },
              {
                  display_type: "string",
                  value: "letter",
                  trait_type: "Character Set"
              },
              {
                  display_type: "date",
                  value: 1660365492000,
                  trait_type: "Registration Date"
              },
              {
                  display_type: "date",
                  value: 1755036348000,
                  trait_type: "Expiration Date"
              }
          ],
          name_length: 10,
          version: 0,
          url: "https://app.ens.domains/name/moonrocket.eth"
      },
      tokenUri: {
          raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2",
          gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2"
      },
      media: [
          {
              raw: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image",
              gateway: "https://metadata.ens.domains/mainnet/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85/0xdda90721d4e55d9f305deba3a1f3271c1831e72eaf7566eaeb4ae0c38819d6f2/image"
          }
      ],
      renting: {
          id: "116",
          cursor: 46,
          renterAddress: "0xec1625f0be12b31d8edfdd165f7750ee4630a475",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "117",
      cursor: 117,
      nftAddress: "0x0db8c099b426677f575d512874d45a767e9acc3c",
      tokenId: "1",
      nftPrice: 65536,
      dailyRentPrice: 100,
      collateralClaimed: false,
      lenderAddress: "0xf2b506a799159ac4add1ad7182d1635b6cf5dc24",
      paymentToken: "1",
      lentAt: "1627907727",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x0db8c099b426677f575d512874d45a767e9acc3c",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Astrocat",
      description: "reNFT Genesis Card #1. To the Moon, Cat.",
      timeLastUpdated: "2022-11-10T18:55:48.586Z",
      rawMetadata: {
          name: "Astrocat",
          description: "reNFT Genesis Card #1. To the Moon, Cat.",
          image: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4"
      },
      tokenUri: {
          raw: "ipfs://QmSATVLXwpcCreYfzYxLzGUSqJYSFA8jthSMZ6rjxWWAzD/1",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmSATVLXwpcCreYfzYxLzGUSqJYSFA8jthSMZ6rjxWWAzD/1"
      },
      media: [
          {
              raw: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4",
              gateway: "https://ipfs.io/ipfs/QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4"
          }
      ],
      renting: {
          id: "117",
          cursor: 101,
          renterAddress: "0x000000a05938f4d791a9ef2121b82a943c4b181b",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "124",
      cursor: 124,
      nftAddress: "0x6b47e7066c7db71aa04a1d5872496fe05c4c331f",
      tokenId: "178",
      nftPrice: 32768000,
      dailyRentPrice: 983040,
      collateralClaimed: true,
      lenderAddress: "0x4cb01b6672bc750821af952ec5a2447fc90195b1",
      paymentToken: "2",
      lentAt: "1628109691",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://peer-ec1.decentraland.org/content/contents/QmWQ2k6UXgqt8rLjprgfKkVMSqJH2Qyaehq5MneezeFg8w",
      paymentTokenName: "WETH",
      contract: {
          address: "0x6b47e7066c7db71aa04a1d5872496fe05c4c331f",
          name: "dcl://rtfkt_x_atari",
          symbol: "DCLRTFTKTI",
          totalSupply: "678",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Purple RTFKT X Atari Sneakers",
      description: "DCL Wearable 178/1000",
      timeLastUpdated: "2022-10-29T15:21:48.510Z",
      rawMetadata: {
          image: "https://peer-ec1.decentraland.org/content/contents/QmWQ2k6UXgqt8rLjprgfKkVMSqJH2Qyaehq5MneezeFg8w",
          thumbnail: "https://peer-ec1.decentraland.org/content/contents/Qmb9K4vMYFFqpffmuh2BwkU3ShrMMVHckG7czk2p3t8ieZ",
          name: "Purple RTFKT X Atari Sneakers",
          description: "DCL Wearable 178/1000",
          language: "en-US",
          attributes: [
              {
                  value: "epic",
                  trait_type: "Rarity"
              },
              {
                  value: "feet",
                  trait_type: "Category"
              },
              {
                  value: "sneakers",
                  trait_type: "Tag"
              },
              {
                  value: "purple",
                  trait_type: "Tag"
              },
              {
                  value: "atari",
                  trait_type: "Tag"
              },
              {
                  value: "rtfkt",
                  trait_type: "Tag"
              },
              {
                  value: "pong",
                  trait_type: "Tag"
              },
              {
                  value: "trainers",
                  trait_type: "Tag"
              },
              {
                  value: "unique",
                  trait_type: "Tag"
              },
              {
                  value: "retro",
                  trait_type: "Tag"
              },
              {
                  value: "collab",
                  trait_type: "Tag"
              },
              {
                  value: "hologram",
                  trait_type: "Tag"
              },
              {
                  value: "blue",
                  trait_type: "Tag"
              },
              {
                  value: "pink",
                  trait_type: "Tag"
              },
              {
                  value: "exclusive",
                  trait_type: "Tag"
              }
          ],
          id: "urn:decentraland:ethereum:collections-v1:rtfkt_x_atari:p_rtfkt_x_atari_feet"
      },
      tokenUri: {
          raw: "https://wearable-api.decentraland.org/v2/standards/erc721-metadata/collections/rtfkt_x_atari/wearables/p_rtfkt_x_atari_feet/178",
          gateway: "https://wearable-api.decentraland.org/v2/standards/erc721-metadata/collections/rtfkt_x_atari/wearables/p_rtfkt_x_atari_feet/178"
      },
      media: [
          {
              raw: "https://peer-ec1.decentraland.org/content/contents/QmWQ2k6UXgqt8rLjprgfKkVMSqJH2Qyaehq5MneezeFg8w",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/dc17dbbe7e7cdbed2738c2be4ad159e3.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/dc17dbbe7e7cdbed2738c2be4ad159e3.png",
              format: "png",
              bytes: 277574
          }
      ],
      renting: {
          id: "124",
          cursor: 33,
          renterAddress: "0x80b1b33a888924ee204b27553d270b3ae6a22ac4",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "126",
      cursor: 126,
      nftAddress: "0xd4d871419714b778ebec2e22c7c53572b573706e",
      tokenId: "8998",
      nftPrice: 65536,
      dailyRentPrice: 100,
      collateralClaimed: true,
      lenderAddress: "0x8bd49c4038bae512e46b1406f3204bfa0715f73a",
      paymentToken: "1",
      lentAt: "1628131747",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://go.fission.app/json/8998/image.jpg",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xd4d871419714b778ebec2e22c7c53572b573706e",
          name: "Stoner Cats",
          symbol: "TOKEn",
          totalSupply: "10420",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Stoner Cats #8998",
      description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
      timeLastUpdated: "2022-11-10T21:33:45.886Z",
      rawMetadata: {
          name: "Stoner Cats #8998",
          description: "Stoner Cats is an adult animated short series accessed exclusively by owning a collectible Stoner Cat NFT. The NFT sales directly fund the mini-pilot and all future content. The show is centered around five house cats who mysteriously become sentient. With their *higher* consciousness, they realize that their beloved owner needs rescue from a myriad of dangerous situations. With great *flower* comes great responsibility.",
          image: "https://go.fission.app/json/8998/image.jpg",
          attributes: [
              {
                  value: "Hammy",
                  trait_type: "Name"
              },
              {
                  value: "Weed Green",
                  trait_type: "Backdrops"
              },
              {
                  value: "Puff Puff Pass",
                  trait_type: "Left Arm"
              },
              {
                  value: "Lighter",
                  trait_type: "Right Arm"
              },
              {
                  value: "Yellow",
                  trait_type: "Collars"
              },
              {
                  value: "Naked",
                  trait_type: "Eyes"
              },
              {
                  value: "Kitty Cap",
                  trait_type: "Accessories"
              },
              {
                  value: "Ruh-roh",
                  trait_type: "Expressions"
              }
          ]
      },
      tokenUri: {
          raw: "https://go.fission.app/json/8998/index.json",
          gateway: "https://go.fission.app/json/8998/index.json"
      },
      media: [
          {
              raw: "https://go.fission.app/json/8998/image.jpg",
              gateway: "https://nft-cdn.alchemy.com/eth-mainnet/0c6ea5b6f7ea3a1e1e22aa0b43254819",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/thumbnail/eth-mainnet/0c6ea5b6f7ea3a1e1e22aa0b43254819",
              format: "jpeg",
              bytes: 333627
          }
      ],
      renting: {
          id: "126",
          cursor: 14,
          renterAddress: "0xd425333dd22b049f143522e519a06462c633f37a",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "15",
      cursor: 15,
      nftAddress: "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
      tokenId: "8423",
      nftPrice: 500,
      dailyRentPrice: 100,
      collateralClaimed: true,
      lenderAddress: "0x426923e98e347158d5c471a9391edaea95516473",
      paymentToken: "1",
      lentAt: "1627067603",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://ipfs/QmT1bVnP5dWvufGuKeSRADQ8mMEgiXuzSmZ1zyAdY1p3Ar",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
          name: "Rarible",
          symbol: "RARI",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "CatETHriX",
      description: "I come from the Pleiades. Come with me, I will show you the Matrix, Neo... Follow the cat.",
      timeLastUpdated: "2022-11-08T21:03:33.520Z",
      rawMetadata: {
          name: "CatETHriX",
          description: "I come from the Pleiades. Come with me, I will show you the Matrix, Neo... Follow the cat.",
          image: "ipfs://ipfs/QmT1bVnP5dWvufGuKeSRADQ8mMEgiXuzSmZ1zyAdY1p3Ar",
          external_url: "https://app.rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:8423",
          attributes: [
              {
                  value: "465DCa9995D6c2a81A9Be80fBCeD5a770dEE3daE",
                  key: "0x",
                  trait_type: "0x"
              },
              {
                  value: "0x4bbbd966ea913545ad556045b7af18f52a0ae91c",
                  key: "naz.life",
                  trait_type: "naz.life"
              },
              {
                  value: "NEO",
                  key: "join",
                  trait_type: "join"
              },
              {
                  value: "Agent Smith",
                  key: "quit",
                  trait_type: "quit"
              },
              {
                  value: "is data",
                  key: "public goods",
                  trait_type: "public goods"
              },
              {
                  value: "neuron.team",
                  key: "check out",
                  trait_type: "check out"
              }
          ]
      },
      tokenUri: {
          raw: "ipfs://ipfs/QmZA9YYtiXFgCsg5Tgzx5sMSANh5MbtXHJqhrF2dXREJKG",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmZA9YYtiXFgCsg5Tgzx5sMSANh5MbtXHJqhrF2dXREJKG"
      },
      media: [
          {
              raw: "ipfs://ipfs/QmT1bVnP5dWvufGuKeSRADQ8mMEgiXuzSmZ1zyAdY1p3Ar",
              gateway: "https://ipfs.io/ipfs/QmT1bVnP5dWvufGuKeSRADQ8mMEgiXuzSmZ1zyAdY1p3Ar"
          }
      ],
      renting: {
          id: "15",
          cursor: 12,
          renterAddress: "0x4be828f2e43a3bd9348e0c44416e4a3ed756842c",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "152",
      cursor: 152,
      nftAddress: "0xfaff15c6cdaca61a4f87d329689293e07c98f578",
      tokenId: "2",
      nftPrice: 3276800,
      dailyRentPrice: 131072,
      collateralClaimed: true,
      lenderAddress: "0xbcfbd765a684ff568901abc6f4dc9c1c14e268be",
      paymentToken: "3",
      lentAt: "1629431862",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2",
      paymentTokenName: "DAI",
      contract: {
          address: "0xfaff15c6cdaca61a4f87d329689293e07c98f578",
          name: "Zapper NFT",
          symbol: "ZPR_NFT",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Welcome to the Zapperverse",
      description: "Zap back to reality.",
      timeLastUpdated: "2022-11-10T22:56:50.799Z",
      rawMetadata: {
          name: "Welcome to the Zapperverse",
          description: "Zap back to reality.",
          image: "ipfs://QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2",
          properties: {
              generation: "1",
              levelRequirement: "4"
          }
      },
      tokenUri: {
          raw: "ipfs://ipfs/QmSzLZygKJmPHz5CnRrmnuNyjSTLXNgx6YGCk6DGJnBeKT",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmSzLZygKJmPHz5CnRrmnuNyjSTLXNgx6YGCk6DGJnBeKT"
      },
      media: [
          {
              raw: "ipfs://QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2",
              gateway: "https://ipfs.io/ipfs/QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2"
          }
      ],
      renting: {
          id: "152",
          cursor: 50,
          renterAddress: "0x7703d8c0b329a99e3d3f6db51a243dde4a8e498f",
          rentDuration: "2"
      }
  },
  {
      __typename: "Lending",
      id: "18",
      cursor: 18,
      nftAddress: "0x60f80121c31a0d46b5279700f9df786054aa5ee5",
      tokenId: "544825",
      nftPrice: 1310720,
      dailyRentPrice: 1000,
      collateralClaimed: false,
      lenderAddress: "0x9ddbd7ea8415fd3b0d78f020d0fcfa7caaf88fce",
      paymentToken: "3",
      lentAt: "1627068423",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://ipfs/QmXFuGB7ZpqRcEmypvJDEUKnkyrYEXZUH8HmF1fXuuio83/image.jpeg",
      paymentTokenName: "DAI",
      contract: {
          address: "0x60f80121c31a0d46b5279700f9df786054aa5ee5",
          name: "Rarible",
          symbol: "RARI",
          totalSupply: "154558",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Cyber Chick",
      description: "Her thoughts are unknown",
      timeLastUpdated: "2022-10-25T11:37:57.584Z",
      rawMetadata: {
          name: "Cyber Chick",
          description: "Her thoughts are unknown",
          image: "ipfs://ipfs/QmXFuGB7ZpqRcEmypvJDEUKnkyrYEXZUH8HmF1fXuuio83/image.jpeg",
          external_url: "https://rarible.com/token/0x60f80121c31a0d46b5279700f9df786054aa5ee5:544825",
          attributes: []
      },
      tokenUri: {
          raw: "ipfs://ipfs/QmWUvB8Xco7sfbeX4bzSWUPZdEpSU3SAs7vQbEnmG2ibbt",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmWUvB8Xco7sfbeX4bzSWUPZdEpSU3SAs7vQbEnmG2ibbt"
      },
      media: [
          {
              raw: "ipfs://ipfs/QmXFuGB7ZpqRcEmypvJDEUKnkyrYEXZUH8HmF1fXuuio83/image.jpeg",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/7623c2fdb4c37715c06595cd044d4d23.jpg",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/7623c2fdb4c37715c06595cd044d4d23.jpg",
              format: "jpg",
              bytes: 32524
          }
      ],
      renting: {
          id: "18",
          cursor: 67,
          renterAddress: "0xbbbeee173a331ea777158c68775b7b3b7524eed4",
          rentDuration: "2"
      }
  },
  {
      __typename: "Lending",
      id: "193",
      cursor: 193,
      nftAddress: "0x74ee68a33f6c9f113e22b3b77418b75f85d07d22",
      tokenId: "3",
      nftPrice: 4259840,
      dailyRentPrice: 650,
      collateralClaimed: false,
      lenderAddress: "0xd7f96f7fc4f66ffdb9a594b2525d6d44c075c0df",
      paymentToken: "3",
      lentAt: "1633847074",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmTt3xHtC2hCME5MTaFT6D6stSevFDs9Hy634UibEBMLBf",
      paymentTokenName: "DAI",
      contract: {
          address: "0x74ee68a33f6c9f113e22b3b77418b75f85d07d22",
          name: "Zerion Genesis Collection",
          symbol: "ZGC",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "#3 Eye",
      description: "Zerion Genesis Collection, 2021. This limited-edition digital card is part of Zerion’s first NFT drop. The Genesis Collection was designed in collaboration with Nikolay Ironov, an AI developed by the design studio Art. Lebedev. Cards are issued as Common, Rare or Legendary.",
      timeLastUpdated: "2022-11-10T22:57:26.194Z",
      rawMetadata: {
          name: "#3 Eye",
          description: "Zerion Genesis Collection, 2021. This limited-edition digital card is part of Zerion’s first NFT drop. The Genesis Collection was designed in collaboration with Nikolay Ironov, an AI developed by the design studio Art. Lebedev. Cards are issued as Common, Rare or Legendary.",
          image: "ipfs://QmTt3xHtC2hCME5MTaFT6D6stSevFDs9Hy634UibEBMLBf",
          attributes: [
              {
                  value: "0",
                  trait_type: "Generation"
              },
              {
                  value: "Rare",
                  trait_type: "Rarity"
              }
          ]
      },
      tokenUri: {
          raw: "ipfs://QmcxJX7kFLopmM37Ae8UHxeYSKrDAs9JC7HioCLHNEiGwK",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmcxJX7kFLopmM37Ae8UHxeYSKrDAs9JC7HioCLHNEiGwK"
      },
      media: [
          {
              raw: "ipfs://QmTt3xHtC2hCME5MTaFT6D6stSevFDs9Hy634UibEBMLBf",
              gateway: "https://ipfs.io/ipfs/QmTt3xHtC2hCME5MTaFT6D6stSevFDs9Hy634UibEBMLBf"
          }
      ],
      renting: {
          id: "193",
          cursor: 35,
          renterAddress: "0xe0d88e0d79cdc70501cc3ff073fde2d19e903604",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "2",
      cursor: 2,
      nftAddress: "0x2af75676692817d85121353f0d6e8e9ae6ad5576",
      tokenId: "57901400454703047190737227506664559104227746562895456916506612236782709770370",
      nftPrice: 201,
      dailyRentPrice: 100,
      collateralClaimed: true,
      lenderAddress: "0x465dca9995d6c2a81a9be80fbced5a770dee3dae",
      paymentToken: "1",
      lentAt: "1626963918",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://assets.f1deltatime.com/image/nft/2020_suspension_common.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x2af75676692817d85121353f0d6e8e9ae6ad5576",
          name: "F1® Delta Time Inventory",
          symbol: "F1DTI",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Suspension",
      description: "Concerned with absorbing and defusing impacts with the track surface, the suspension acts as the platform for translating engine power and downforce into speed.",
      timeLastUpdated: "2022-09-15T06:40:24.092Z",
      rawMetadata: {
          collection_id: "57901400454703047190736461258894126159444986414294119507317315566065063821312",
          collection_url: "https://nft.f1deltatime.com/json/57901400454703047190736461258894126159444986414294119507317315566065063821312",
          image: "https://assets.f1deltatime.com/image/nft/2020_suspension_common.png",
          external_url: "https://www.f1deltatime.com/nft-preview/?id=57901400454703047190737227506664559104227746562895456916506612236782709770370",
          name: "Suspension",
          core_attributes: {
              country: "None",
              racing: {
                  "luck": 0,
                  "Grip": 314,
                  "stat2": 312,
                  "stat3": 314,
                  "special1": 0,
                  "stat1": 266,
                  "special2": 0,
                  "effect": 0,
                  "Acceleration": 312,
                  "Top Speed": 266
              },
              modelId: 0,
              subTypeId: 8,
              team: "None",
              label: "None",
              counter: 2178,
              type: "Part",
              countryId: 0,
              rarityTier: "Common",
              driverId: 0,
              driver: "None",
              labelId: 0,
              seasonId: 3,
              teamId: 0,
              season: "2020",
              typeId: 3,
              subType: "Suspension",
              model: "None",
              rarity: 8
          },
          description: "Concerned with absorbing and defusing impacts with the track surface, the suspension acts as the platform for translating engine power and downforce into speed.",
          attributes: [
              {
                  value: "Part",
                  trait_type: "type"
              },
              {
                  value: "Common",
                  trait_type: "tier"
              },
              {
                  display_type: "number",
                  value: 8,
                  trait_type: "rarity"
              },
              {
                  value: "2020",
                  trait_type: "season"
              },
              {
                  value: "Suspension",
                  trait_type: "part_type"
              },
              {
                  display_type: "boost_number",
                  value: 266,
                  trait_type: "top_speed"
              },
              {
                  display_type: "boost_number",
                  value: 312,
                  trait_type: "acceleration"
              },
              {
                  display_type: "boost_number",
                  value: 314,
                  trait_type: "grip"
              }
          ],
          id: "57901400454703047190737227506664559104227746562895456916506612236782709770370",
          collection: "Suspension 2020"
      },
      tokenUri: {
          raw: "https://nft.f1deltatime.com/json/57901400454703047190737227506664559104227746562895456916506612236782709770370",
          gateway: "https://nft.f1deltatime.com/json/57901400454703047190737227506664559104227746562895456916506612236782709770370"
      },
      media: [
          {
              raw: "https://assets.f1deltatime.com/image/nft/2020_suspension_common.png",
              gateway: "https://assets.f1deltatime.com/image/nft/2020_suspension_common.png"
          }
      ],
      spamInfo: {
          isSpam: true,
          classifications: [
              "SingleTxErc721"
          ]
      },
      renting: {
          id: "2",
          cursor: 2,
          renterAddress: "0x00000444e5a1a667663b0adfd853e8efa0470698",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "201",
      cursor: 201,
      nftAddress: "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
      tokenId: "631350",
      nftPrice: 200,
      dailyRentPrice: 10,
      collateralClaimed: false,
      lenderAddress: "0xb24382080532f4694e45d2eb2ce542569a698f27",
      paymentToken: "1",
      lentAt: "1633914375",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://ipfs/QmeA2BUEpSLZWaKEJaQXuV2B8dE1EJwRWKzyqCtYpsDbWk/image.png",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
          name: "Rarible",
          symbol: "RARI",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Doctor Hyde's Serpent Serum",
      description: "After purchase buyer will own a limited edition of this NFT featuring, \"Doctor Hyde's Serpent Serum\" an original retro medical quackery ad created by Sour Monkey Productions. This NFT is a high-resolution PNG image file, size 24.2 MB, Dimensions 6546x8000, NFT created March 2021, creator Sour Monkey Productions.",
      timeLastUpdated: "2022-11-10T22:14:04.853Z",
      rawMetadata: {
          name: "Doctor Hyde's Serpent Serum",
          description: "After purchase buyer will own a limited edition of this NFT featuring, \"Doctor Hyde's Serpent Serum\" an original retro medical quackery ad created by Sour Monkey Productions. This NFT is a high-resolution PNG image file, size 24.2 MB, Dimensions 6546x8000, NFT created March 2021, creator Sour Monkey Productions.",
          image: "ipfs://ipfs/QmeA2BUEpSLZWaKEJaQXuV2B8dE1EJwRWKzyqCtYpsDbWk/image.png",
          external_url: "https://rarible.com/token/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:631350",
          attributes: [
              {
                  value: "PNG Image",
                  key: "File Type:",
                  trait_type: "File Type:"
              },
              {
                  value: "24.2 MB",
                  key: "File Size:",
                  trait_type: "File Size:"
              },
              {
                  value: "6546x8000",
                  key: "Dimensions:",
                  trait_type: "Dimensions:"
              },
              {
                  value: "March 2021",
                  key: "Created:",
                  trait_type: "Created:"
              },
              {
                  value: "Sour Monkey Productions",
                  key: "Creator:",
                  trait_type: "Creator:"
              }
          ]
      },
      tokenUri: {
          raw: "ipfs://ipfs/QmVCUhHUbXumWAuJ8BN4a47aLKy933sUbxFuamoXpSvpcx",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmVCUhHUbXumWAuJ8BN4a47aLKy933sUbxFuamoXpSvpcx"
      },
      media: [
          {
              raw: "ipfs://ipfs/QmeA2BUEpSLZWaKEJaQXuV2B8dE1EJwRWKzyqCtYpsDbWk/image.png",
              gateway: "https://res.cloudinary.com/alchemyapi/image/upload/mainnet/59e9df144d88cd7f7dc7709f9ca89b59.png",
              thumbnail: "https://res.cloudinary.com/alchemyapi/image/upload/w_256,h_256/mainnet/59e9df144d88cd7f7dc7709f9ca89b59.png",
              format: "png",
              bytes: 25469334
          }
      ],
      renting: {
          id: "201",
          cursor: 71,
          renterAddress: "0xbbbeee173a331ea777158c68775b7b3b7524eed4",
          rentDuration: "2"
      }
  },
  {
      __typename: "Lending",
      id: "208",
      cursor: 208,
      nftAddress: "0xc67ded0ec78b849e17771b2e8a7e303b4dad6dd4",
      tokenId: "3",
      nftPrice: 65536,
      dailyRentPrice: 10,
      collateralClaimed: false,
      lenderAddress: "0xb1a4573c3e241f3620a208b4001f76578e027106",
      paymentToken: "2",
      lentAt: "1634088635",
      lentAmount: "4",
      type: NftEntityType.RENTING,
      assetUrl: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwODAgMTA4MCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MDAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxYTFhMWEiLz48c3ZnIGlkPSJMYXllcl8xIiB4PSIzNTAiIHk9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTA4MCAxMDgwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjUpIj48Zz48cG9seWdvbiBjbGFzcz0ic3QwIiBmaWxsPSIjMEY1MkJBIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggODc2LjE4LDI1NS4yIj48L3BvbHlnb24+PGcgY2xhc3M9InN0MSIgb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNNjc5LjI1LDU4LjI3aC0yNzguNUwyMDMuODIsMjU1LjJ2NTY5LjZsMTk2LjkzLDE5Ni45M2gyNzguNUw4NzYuMTgsODI0LjhWMjU1LjJMNjc5LjI1LDU4LjI3eiBNNzM5LjU2LDcwOS4wNiBsLTExNi45LDExNi45SDQ1Ny4zNGwtMTE2LjktMTE2LjlWMzcwLjk0bDExNi45LTExNi45aDE2NS4zMmwxMTYuOSwxMTYuOVY3MDkuMDZ6Ij48L3BhdGg+PC9nPjxnPjxnPjxwb2x5Z29uIGNsYXNzPSJzdDIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggIDg3Ni4xOCwyNTUuMiI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwRjUyQkEiIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjYyMi42NiwyNTQuMDQgNDU3LjM0LDI1NC4wNCAzNDAuNDQsMzcwLjk0IDM0MC40NCw3MDkuMDYgNDU3LjM0LDgyNS45NiA2MjIuNjYsODI1Ljk2ICA3MzkuNTYsNzA5LjA2IDczOS41NiwzNzAuOTQiPjwvcG9seWdvbj48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjQwMC43NSIgeTE9IjU4LjI3IiB4Mj0iNDU3LjM0IiB5Mj0iMjU0LjA0Ij48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI2NzkuMjUiIHkxPSI1OC4yNyIgeDI9IjYyMi42NiIgeTI9IjI1NC4wNCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMjAzLjgyIiB5MT0iMjU1LjIiIHgyPSIzNDAuNDQiIHkyPSIzNzAuOTQiPjwvbGluZT48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjczOS41NiIgeTE9IjM3MC45NCIgeDI9Ijg3Ni4xOCIgeTI9IjI1NS4yIj48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI3MzkuNTYiIHkxPSI3MDkuMDYiIHgyPSI4NzYuMTgiIHkyPSI4MjQuOCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNjIyLjY2IiB5MT0iODI1Ljk2IiB4Mj0iNjc5LjI1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNDU3LjM0IiB5MT0iODI1Ljk2IiB4Mj0iNDAwLjc1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMzQwLjQ0IiB5MT0iNzA5LjA2IiB4Mj0iMjAzLjgyIiB5Mj0iODI0LjgiPjwvbGluZT48L2c+PC9nPjwvZz48L2c+PC9zdmc+PHRleHQgeD0iNTAlIiB5PSI5NSUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMi41ZW0iIGZpbGw9IiNGRkZGRkYiPlNhcHBoaXJlICMzPC90ZXh0Pjwvc3ZnPg==",
      paymentTokenName: "WETH",
      contract: {
          address: "0xc67ded0ec78b849e17771b2e8a7e303b4dad6dd4",
          name: "Provably Rare Gem",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Sapphire #3",
      description: "Provably Rare Gem is a permissionless on-chain asset for hardcore collectors to mine and collect. Gems must be mined with off-chain Proof-of-Work. The higher the gem rarity, the more difficult it is to be found. Stats and other functionalities are intentionally omitted for others to interpret.",
      timeLastUpdated: "2022-11-10T01:06:13.864Z",
      rawMetadata: {
          name: "Sapphire #3",
          description: "Provably Rare Gem is a permissionless on-chain asset for hardcore collectors to mine and collect. Gems must be mined with off-chain Proof-of-Work. The higher the gem rarity, the more difficult it is to be found. Stats and other functionalities are intentionally omitted for others to interpret.",
          image: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwODAgMTA4MCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MDAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxYTFhMWEiLz48c3ZnIGlkPSJMYXllcl8xIiB4PSIzNTAiIHk9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTA4MCAxMDgwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjUpIj48Zz48cG9seWdvbiBjbGFzcz0ic3QwIiBmaWxsPSIjMEY1MkJBIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggODc2LjE4LDI1NS4yIj48L3BvbHlnb24+PGcgY2xhc3M9InN0MSIgb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNNjc5LjI1LDU4LjI3aC0yNzguNUwyMDMuODIsMjU1LjJ2NTY5LjZsMTk2LjkzLDE5Ni45M2gyNzguNUw4NzYuMTgsODI0LjhWMjU1LjJMNjc5LjI1LDU4LjI3eiBNNzM5LjU2LDcwOS4wNiBsLTExNi45LDExNi45SDQ1Ny4zNGwtMTE2LjktMTE2LjlWMzcwLjk0bDExNi45LTExNi45aDE2NS4zMmwxMTYuOSwxMTYuOVY3MDkuMDZ6Ij48L3BhdGg+PC9nPjxnPjxnPjxwb2x5Z29uIGNsYXNzPSJzdDIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggIDg3Ni4xOCwyNTUuMiI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwRjUyQkEiIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjYyMi42NiwyNTQuMDQgNDU3LjM0LDI1NC4wNCAzNDAuNDQsMzcwLjk0IDM0MC40NCw3MDkuMDYgNDU3LjM0LDgyNS45NiA2MjIuNjYsODI1Ljk2ICA3MzkuNTYsNzA5LjA2IDczOS41NiwzNzAuOTQiPjwvcG9seWdvbj48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjQwMC43NSIgeTE9IjU4LjI3IiB4Mj0iNDU3LjM0IiB5Mj0iMjU0LjA0Ij48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI2NzkuMjUiIHkxPSI1OC4yNyIgeDI9IjYyMi42NiIgeTI9IjI1NC4wNCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMjAzLjgyIiB5MT0iMjU1LjIiIHgyPSIzNDAuNDQiIHkyPSIzNzAuOTQiPjwvbGluZT48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjczOS41NiIgeTE9IjM3MC45NCIgeDI9Ijg3Ni4xOCIgeTI9IjI1NS4yIj48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI3MzkuNTYiIHkxPSI3MDkuMDYiIHgyPSI4NzYuMTgiIHkyPSI4MjQuOCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNjIyLjY2IiB5MT0iODI1Ljk2IiB4Mj0iNjc5LjI1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNDU3LjM0IiB5MT0iODI1Ljk2IiB4Mj0iNDAwLjc1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMzQwLjQ0IiB5MT0iNzA5LjA2IiB4Mj0iMjAzLjgyIiB5Mj0iODI0LjgiPjwvbGluZT48L2c+PC9nPjwvZz48L2c+PC9zdmc+PHRleHQgeD0iNTAlIiB5PSI5NSUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMi41ZW0iIGZpbGw9IiNGRkZGRkYiPlNhcHBoaXJlICMzPC90ZXh0Pjwvc3ZnPg=="
      },
      tokenUri: {
          raw: "data:application/json;base64,eyAibmFtZSI6ICJTYXBwaGlyZSAjMyIsICJkZXNjcmlwdGlvbiIgOiAiUHJvdmFibHkgUmFyZSBHZW0gaXMgYSBwZXJtaXNzaW9ubGVzcyBvbi1jaGFpbiBhc3NldCBmb3IgaGFyZGNvcmUgY29sbGVjdG9ycyB0byBtaW5lIGFuZCBjb2xsZWN0LiBHZW1zIG11c3QgYmUgbWluZWQgd2l0aCBvZmYtY2hhaW4gUHJvb2Ytb2YtV29yay4gVGhlIGhpZ2hlciB0aGUgZ2VtIHJhcml0eSwgdGhlIG1vcmUgZGlmZmljdWx0IGl0IGlzIHRvIGJlIGZvdW5kLiBTdGF0cyBhbmQgb3RoZXIgZnVuY3Rpb25hbGl0aWVzIGFyZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgZm9yIG90aGVycyB0byBpbnRlcnByZXQuIiwgImltYWdlIjogImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QnBaRDBpVEdGNVpYSmZNU0lnZUQwaU1IQjRJaUI1UFNJd2NIZ2lJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbWxsZDBKdmVEMGlNQ0F3SURFd09EQWdNVEE0TUNJZ2QybGtkR2c5SWpNMU1DSWdhR1ZwWjJoMFBTSTBNREFpUGp4eVpXTjBJSGc5SWpBaUlIazlJakFpSUhkcFpIUm9QU0l4TURnd0lpQm9aV2xuYUhROUlqRXdPREFpSUdacGJHdzlJaU14WVRGaE1XRWlMejQ4YzNabklHbGtQU0pNWVhsbGNsOHhJaUI0UFNJek5UQWlJSGs5SWpNMU1DSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjJhV1YzUW05NFBTSXdJREFnTVRBNE1DQXhNRGd3SWlCM2FXUjBhRDBpTXpVd0lpQm9aV2xuYUhROUlqUXdNQ0krUEdjZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9NQ0F0TWpVcElqNDhaejQ4Y0c5c2VXZHZiaUJqYkdGemN6MGljM1F3SWlCbWFXeHNQU0lqTUVZMU1rSkJJaUJ3YjJsdWRITTlJalkzT1M0eU5TdzFPQzR5TnlBME1EQXVOelVzTlRndU1qY2dNakF6TGpneUxESTFOUzR5SURJd015NDRNaXc0TWpRdU9DQTBNREF1TnpVc01UQXlNUzQzTXlBMk56a3VNalVzTVRBeU1TNDNNeUE0TnpZdU1UZ3NPREkwTGpnZ09EYzJMakU0TERJMU5TNHlJajQ4TDNCdmJIbG5iMjQrUEdjZ1kyeGhjM005SW5OME1TSWdiM0JoWTJsMGVUMGlNQzR6SWo0OGNHRjBhQ0JrUFNKTk5qYzVMakkxTERVNExqSTNhQzB5TnpndU5Vd3lNRE11T0RJc01qVTFMakoyTlRZNUxqWnNNVGsyTGprekxERTVOaTQ1TTJneU56Z3VOVXc0TnpZdU1UZ3NPREkwTGpoV01qVTFMakpNTmpjNUxqSTFMRFU0TGpJM2VpQk5Oek01TGpVMkxEY3dPUzR3TmlCc0xURXhOaTQ1TERFeE5pNDVTRFExTnk0ek5Hd3RNVEUyTGprdE1URTJMamxXTXpjd0xqazBiREV4Tmk0NUxURXhOaTQ1YURFMk5TNHpNbXd4TVRZdU9Td3hNVFl1T1ZZM01Ea3VNRFo2SWo0OEwzQmhkR2crUEM5blBqeG5QanhuUGp4d2IyeDVaMjl1SUdOc1lYTnpQU0p6ZERJaUlHWnBiR3c5SW01dmJtVWlJSE4wY205clpTMTNhV1IwYUQwaU1UQWlJSE4wY205clpTMXRhWFJsY214cGJXbDBQU0l4TUNJZ2MzUnliMnRsUFNJalptWm1abVptSWlCd2IybHVkSE05SWpZM09TNHlOU3cxT0M0eU55QTBNREF1TnpVc05UZ3VNamNnTWpBekxqZ3lMREkxTlM0eUlESXdNeTQ0TWl3NE1qUXVPQ0EwTURBdU56VXNNVEF5TVM0M015QTJOemt1TWpVc01UQXlNUzQzTXlBNE56WXVNVGdzT0RJMExqZ2dJRGczTmk0eE9Dd3lOVFV1TWlJK1BDOXdiMng1WjI5dVBqeHdiMng1WjI5dUlHWnBiR3c5SWlNd1JqVXlRa0VpSUdOc1lYTnpQU0p6ZERJaUlITjBjbTlyWlMxM2FXUjBhRDBpTVRBaUlITjBjbTlyWlMxdGFYUmxjbXhwYldsMFBTSXhNQ0lnYzNSeWIydGxQU0lqWm1abVptWm1JaUJ3YjJsdWRITTlJall5TWk0Mk5pd3lOVFF1TURRZ05EVTNMak0wTERJMU5DNHdOQ0F6TkRBdU5EUXNNemN3TGprMElETTBNQzQwTkN3M01Ea3VNRFlnTkRVM0xqTTBMRGd5TlM0NU5pQTJNakl1TmpZc09ESTFMamsySUNBM016a3VOVFlzTnpBNUxqQTJJRGN6T1M0MU5pd3pOekF1T1RRaVBqd3ZjRzlzZVdkdmJqNDhiR2x1WlNCamJHRnpjejBpYzNReUlpQnpkSEp2YTJVdGQybGtkR2c5SWpFd0lpQnpkSEp2YTJVdGJXbDBaWEpzYVcxcGREMGlNVEFpSUhOMGNtOXJaVDBpSTJabVptWm1aaUlnZURFOUlqUXdNQzQzTlNJZ2VURTlJalU0TGpJM0lpQjRNajBpTkRVM0xqTTBJaUI1TWowaU1qVTBMakEwSWo0OEwyeHBibVUrUEd4cGJtVWdZMnhoYzNNOUluTjBNaUlnYzNSeWIydGxMWGRwWkhSb1BTSXhNQ0lnYzNSeWIydGxMVzFwZEdWeWJHbHRhWFE5SWpFd0lpQnpkSEp2YTJVOUlpTm1abVptWm1ZaUlIZ3hQU0kyTnprdU1qVWlJSGt4UFNJMU9DNHlOeUlnZURJOUlqWXlNaTQyTmlJZ2VUSTlJakkxTkM0d05DSStQQzlzYVc1bFBqeHNhVzVsSUdOc1lYTnpQU0p6ZERJaUlITjBjbTlyWlMxM2FXUjBhRDBpTVRBaUlITjBjbTlyWlMxdGFYUmxjbXhwYldsMFBTSXhNQ0lnYzNSeWIydGxQU0lqWm1abVptWm1JaUI0TVQwaU1qQXpMamd5SWlCNU1UMGlNalUxTGpJaUlIZ3lQU0l6TkRBdU5EUWlJSGt5UFNJek56QXVPVFFpUGp3dmJHbHVaVDQ4YkdsdVpTQmpiR0Z6Y3owaWMzUXlJaUJ6ZEhKdmEyVXRkMmxrZEdnOUlqRXdJaUJ6ZEhKdmEyVXRiV2wwWlhKc2FXMXBkRDBpTVRBaUlITjBjbTlyWlQwaUkyWm1abVptWmlJZ2VERTlJamN6T1M0MU5pSWdlVEU5SWpNM01DNDVOQ0lnZURJOUlqZzNOaTR4T0NJZ2VUSTlJakkxTlM0eUlqNDhMMnhwYm1VK1BHeHBibVVnWTJ4aGMzTTlJbk4wTWlJZ2MzUnliMnRsTFhkcFpIUm9QU0l4TUNJZ2MzUnliMnRsTFcxcGRHVnliR2x0YVhROUlqRXdJaUJ6ZEhKdmEyVTlJaU5tWm1abVptWWlJSGd4UFNJM016a3VOVFlpSUhreFBTSTNNRGt1TURZaUlIZ3lQU0k0TnpZdU1UZ2lJSGt5UFNJNE1qUXVPQ0krUEM5c2FXNWxQanhzYVc1bElHTnNZWE56UFNKemRESWlJSE4wY205clpTMTNhV1IwYUQwaU1UQWlJSE4wY205clpTMXRhWFJsY214cGJXbDBQU0l4TUNJZ2MzUnliMnRsUFNJalptWm1abVptSWlCNE1UMGlOakl5TGpZMklpQjVNVDBpT0RJMUxqazJJaUI0TWowaU5qYzVMakkxSWlCNU1qMGlNVEF5TVM0M015SStQQzlzYVc1bFBqeHNhVzVsSUdOc1lYTnpQU0p6ZERJaUlITjBjbTlyWlMxM2FXUjBhRDBpTVRBaUlITjBjbTlyWlMxdGFYUmxjbXhwYldsMFBTSXhNQ0lnYzNSeWIydGxQU0lqWm1abVptWm1JaUI0TVQwaU5EVTNMak0wSWlCNU1UMGlPREkxTGprMklpQjRNajBpTkRBd0xqYzFJaUI1TWowaU1UQXlNUzQzTXlJK1BDOXNhVzVsUGp4c2FXNWxJR05zWVhOelBTSnpkRElpSUhOMGNtOXJaUzEzYVdSMGFEMGlNVEFpSUhOMGNtOXJaUzF0YVhSbGNteHBiV2wwUFNJeE1DSWdjM1J5YjJ0bFBTSWpabVptWm1abUlpQjRNVDBpTXpRd0xqUTBJaUI1TVQwaU56QTVMakEySWlCNE1qMGlNakF6TGpneUlpQjVNajBpT0RJMExqZ2lQand2YkdsdVpUNDhMMmMrUEM5blBqd3ZaejQ4TDJjK1BDOXpkbWMrUEhSbGVIUWdlRDBpTlRBbElpQjVQU0k1TlNVaUlHUnZiV2x1WVc1MExXSmhjMlZzYVc1bFBTSnRhV1JrYkdVaUlIUmxlSFF0WVc1amFHOXlQU0p0YVdSa2JHVWlJR1p2Ym5RdGMybDZaVDBpTWk0MVpXMGlJR1pwYkd3OUlpTkdSa1pHUmtZaVBsTmhjSEJvYVhKbElDTXpQQzkwWlhoMFBqd3ZjM1puUGc9PSJ9",
          gateway: ""
      },
      media: [
          {
              raw: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwODAgMTA4MCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MDAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxYTFhMWEiLz48c3ZnIGlkPSJMYXllcl8xIiB4PSIzNTAiIHk9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTA4MCAxMDgwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjUpIj48Zz48cG9seWdvbiBjbGFzcz0ic3QwIiBmaWxsPSIjMEY1MkJBIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggODc2LjE4LDI1NS4yIj48L3BvbHlnb24+PGcgY2xhc3M9InN0MSIgb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNNjc5LjI1LDU4LjI3aC0yNzguNUwyMDMuODIsMjU1LjJ2NTY5LjZsMTk2LjkzLDE5Ni45M2gyNzguNUw4NzYuMTgsODI0LjhWMjU1LjJMNjc5LjI1LDU4LjI3eiBNNzM5LjU2LDcwOS4wNiBsLTExNi45LDExNi45SDQ1Ny4zNGwtMTE2LjktMTE2LjlWMzcwLjk0bDExNi45LTExNi45aDE2NS4zMmwxMTYuOSwxMTYuOVY3MDkuMDZ6Ij48L3BhdGg+PC9nPjxnPjxnPjxwb2x5Z29uIGNsYXNzPSJzdDIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggIDg3Ni4xOCwyNTUuMiI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwRjUyQkEiIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjYyMi42NiwyNTQuMDQgNDU3LjM0LDI1NC4wNCAzNDAuNDQsMzcwLjk0IDM0MC40NCw3MDkuMDYgNDU3LjM0LDgyNS45NiA2MjIuNjYsODI1Ljk2ICA3MzkuNTYsNzA5LjA2IDczOS41NiwzNzAuOTQiPjwvcG9seWdvbj48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjQwMC43NSIgeTE9IjU4LjI3IiB4Mj0iNDU3LjM0IiB5Mj0iMjU0LjA0Ij48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI2NzkuMjUiIHkxPSI1OC4yNyIgeDI9IjYyMi42NiIgeTI9IjI1NC4wNCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMjAzLjgyIiB5MT0iMjU1LjIiIHgyPSIzNDAuNDQiIHkyPSIzNzAuOTQiPjwvbGluZT48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjczOS41NiIgeTE9IjM3MC45NCIgeDI9Ijg3Ni4xOCIgeTI9IjI1NS4yIj48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI3MzkuNTYiIHkxPSI3MDkuMDYiIHgyPSI4NzYuMTgiIHkyPSI4MjQuOCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNjIyLjY2IiB5MT0iODI1Ljk2IiB4Mj0iNjc5LjI1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNDU3LjM0IiB5MT0iODI1Ljk2IiB4Mj0iNDAwLjc1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMzQwLjQ0IiB5MT0iNzA5LjA2IiB4Mj0iMjAzLjgyIiB5Mj0iODI0LjgiPjwvbGluZT48L2c+PC9nPjwvZz48L2c+PC9zdmc+PHRleHQgeD0iNTAlIiB5PSI5NSUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMi41ZW0iIGZpbGw9IiNGRkZGRkYiPlNhcHBoaXJlICMzPC90ZXh0Pjwvc3ZnPg==",
              gateway: "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwODAgMTA4MCIgd2lkdGg9IjM1MCIgaGVpZ2h0PSI0MDAiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDgwIiBoZWlnaHQ9IjEwODAiIGZpbGw9IiMxYTFhMWEiLz48c3ZnIGlkPSJMYXllcl8xIiB4PSIzNTAiIHk9IjM1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMTA4MCAxMDgwIiB3aWR0aD0iMzUwIiBoZWlnaHQ9IjQwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMjUpIj48Zz48cG9seWdvbiBjbGFzcz0ic3QwIiBmaWxsPSIjMEY1MkJBIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggODc2LjE4LDI1NS4yIj48L3BvbHlnb24+PGcgY2xhc3M9InN0MSIgb3BhY2l0eT0iMC4zIj48cGF0aCBkPSJNNjc5LjI1LDU4LjI3aC0yNzguNUwyMDMuODIsMjU1LjJ2NTY5LjZsMTk2LjkzLDE5Ni45M2gyNzguNUw4NzYuMTgsODI0LjhWMjU1LjJMNjc5LjI1LDU4LjI3eiBNNzM5LjU2LDcwOS4wNiBsLTExNi45LDExNi45SDQ1Ny4zNGwtMTE2LjktMTE2LjlWMzcwLjk0bDExNi45LTExNi45aDE2NS4zMmwxMTYuOSwxMTYuOVY3MDkuMDZ6Ij48L3BhdGg+PC9nPjxnPjxnPjxwb2x5Z29uIGNsYXNzPSJzdDIiIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjY3OS4yNSw1OC4yNyA0MDAuNzUsNTguMjcgMjAzLjgyLDI1NS4yIDIwMy44Miw4MjQuOCA0MDAuNzUsMTAyMS43MyA2NzkuMjUsMTAyMS43MyA4NzYuMTgsODI0LjggIDg3Ni4xOCwyNTUuMiI+PC9wb2x5Z29uPjxwb2x5Z29uIGZpbGw9IiMwRjUyQkEiIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiBwb2ludHM9IjYyMi42NiwyNTQuMDQgNDU3LjM0LDI1NC4wNCAzNDAuNDQsMzcwLjk0IDM0MC40NCw3MDkuMDYgNDU3LjM0LDgyNS45NiA2MjIuNjYsODI1Ljk2ICA3MzkuNTYsNzA5LjA2IDczOS41NiwzNzAuOTQiPjwvcG9seWdvbj48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjQwMC43NSIgeTE9IjU4LjI3IiB4Mj0iNDU3LjM0IiB5Mj0iMjU0LjA0Ij48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI2NzkuMjUiIHkxPSI1OC4yNyIgeDI9IjYyMi42NiIgeTI9IjI1NC4wNCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMjAzLjgyIiB5MT0iMjU1LjIiIHgyPSIzNDAuNDQiIHkyPSIzNzAuOTQiPjwvbGluZT48bGluZSBjbGFzcz0ic3QyIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZT0iI2ZmZmZmZiIgeDE9IjczOS41NiIgeTE9IjM3MC45NCIgeDI9Ijg3Ni4xOCIgeTI9IjI1NS4yIj48L2xpbmU+PGxpbmUgY2xhc3M9InN0MiIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2U9IiNmZmZmZmYiIHgxPSI3MzkuNTYiIHkxPSI3MDkuMDYiIHgyPSI4NzYuMTgiIHkyPSI4MjQuOCI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNjIyLjY2IiB5MT0iODI1Ljk2IiB4Mj0iNjc5LjI1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iNDU3LjM0IiB5MT0iODI1Ljk2IiB4Mj0iNDAwLjc1IiB5Mj0iMTAyMS43MyI+PC9saW5lPjxsaW5lIGNsYXNzPSJzdDIiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlPSIjZmZmZmZmIiB4MT0iMzQwLjQ0IiB5MT0iNzA5LjA2IiB4Mj0iMjAzLjgyIiB5Mj0iODI0LjgiPjwvbGluZT48L2c+PC9nPjwvZz48L2c+PC9zdmc+PHRleHQgeD0iNTAlIiB5PSI5NSUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMi41ZW0iIGZpbGw9IiNGRkZGRkYiPlNhcHBoaXJlICMzPC90ZXh0Pjwvc3ZnPg=="
          }
      ],
      renting: {
          id: "208",
          cursor: 58,
          renterAddress: "0xbbbeee173a331ea777158c68775b7b3b7524eed4",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "209",
      cursor: 209,
      nftAddress: "0xfaff15c6cdaca61a4f87d329689293e07c98f578",
      tokenId: "2",
      nftPrice: 50,
      dailyRentPrice: 1,
      collateralClaimed: false,
      lenderAddress: "0x7e8c0b6af42bc4f41dcda119a736167e1c3a81d5",
      paymentToken: "1",
      lentAt: "1634129375",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0xfaff15c6cdaca61a4f87d329689293e07c98f578",
          name: "Zapper NFT",
          symbol: "ZPR_NFT",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Welcome to the Zapperverse",
      description: "Zap back to reality.",
      timeLastUpdated: "2022-11-10T22:56:50.799Z",
      rawMetadata: {
          name: "Welcome to the Zapperverse",
          description: "Zap back to reality.",
          image: "ipfs://QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2",
          properties: {
              generation: "1",
              levelRequirement: "4"
          }
      },
      tokenUri: {
          raw: "ipfs://ipfs/QmSzLZygKJmPHz5CnRrmnuNyjSTLXNgx6YGCk6DGJnBeKT",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmSzLZygKJmPHz5CnRrmnuNyjSTLXNgx6YGCk6DGJnBeKT"
      },
      media: [
          {
              raw: "ipfs://QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2",
              gateway: "https://ipfs.io/ipfs/QmNLjDFvoznHJzbYxJb3Kgnu5y9AX3zGXQJyZbwDJRkjJ2"
          }
      ],
      renting: {
          id: "209",
          cursor: 96,
          renterAddress: "0x8fe2ad2ce33761eff0a8c1ff3f561ad2aa0d9bc8",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "221",
      cursor: 221,
      nftAddress: "0x0db8c099b426677f575d512874d45a767e9acc3c",
      tokenId: "1",
      nftPrice: 4200,
      dailyRentPrice: 160,
      collateralClaimed: false,
      lenderAddress: "0x985d554590f3f73b707259b58ceb5177de89d1e0",
      paymentToken: "1",
      lentAt: "1634786267",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4",
      paymentTokenName: "SENTINEL",
      contract: {
          address: "0x0db8c099b426677f575d512874d45a767e9acc3c",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "Astrocat",
      description: "reNFT Genesis Card #1. To the Moon, Cat.",
      timeLastUpdated: "2022-11-10T18:55:48.586Z",
      rawMetadata: {
          name: "Astrocat",
          description: "reNFT Genesis Card #1. To the Moon, Cat.",
          image: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4"
      },
      tokenUri: {
          raw: "ipfs://QmSATVLXwpcCreYfzYxLzGUSqJYSFA8jthSMZ6rjxWWAzD/1",
          gateway: "https://alchemy.mypinata.cloud/ipfs/QmSATVLXwpcCreYfzYxLzGUSqJYSFA8jthSMZ6rjxWWAzD/1"
      },
      media: [
          {
              raw: "ipfs://QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4",
              gateway: "https://ipfs.io/ipfs/QmctjdS9LFAK8KrMNXAKhQMrgtdPCGvhUWiEA4RbjqBWnV/Astrocat.mp4"
          }
      ],
      renting: {
          id: "221",
          cursor: 30,
          renterAddress: "0x3290bb2dba0a4dea2c4723014c902a17b2bca1ac",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "228",
      cursor: 228,
      nftAddress: "0x1dfe7ca09e99d10835bf73044a23b73fc20623df",
      tokenId: "131620",
      nftPrice: 100,
      dailyRentPrice: 5000,
      collateralClaimed: false,
      lenderAddress: "0xecda2c559ade78ff0a3b1e5cf0ecd0d23143827b",
      paymentToken: "2",
      lentAt: "1635510359",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIiAvPjx0ZXh0IHg9IjEwIiB5PSIyMCIgY2xhc3M9ImJhc2UiPkJvbmUgV2FuZCBvZiBGdXJ5PC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI0MCIgY2xhc3M9ImJhc2UiPiJTb3Jyb3cgUGVhayIgT3JuYXRlIENoZXN0cGxhdGUgb2YgUG93ZXIgKzE8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjYwIiBjbGFzcz0iYmFzZSI+RHJhZ29uJ3MgQ3Jvd24gb2YgR2lhbnRzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI4MCIgY2xhc3M9ImJhc2UiPkxpbmVuIFNhc2g8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjEwMCIgY2xhc3M9ImJhc2UiPk9ybmF0ZSBHcmVhdmVzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSIxMjAiIGNsYXNzPSJiYXNlIj5EcmFnb25za2luIEdsb3ZlczwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTQwIiBjbGFzcz0iYmFzZSI+TmVja2xhY2Ugb2YgUmVmbGVjdGlvbjwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTYwIiBjbGFzcz0iYmFzZSI+VGl0YW5pdW0gUmluZzwvdGV4dD48L3N2Zz4=",
      paymentTokenName: "WETH",
      contract: {
          address: "0x1dfe7ca09e99d10835bf73044a23b73fc20623df",
          name: "More Loot",
          symbol: "MLOOT",
          totalSupply: "135053",
          tokenType: NftTokenType.ERC721
      },
      tokenType: NftTokenType.ERC721,
      title: "Bag #131620",
      description: "More Loot is additional randomized adventurer gear generated and stored on chain. Maximum supply is dynamic, increasing at 1/10th of Ethereum's block rate. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use More Loot in any way you want.",
      timeLastUpdated: "2022-11-10T21:57:09.306Z",
      rawMetadata: {
          name: "Bag #131620",
          description: "More Loot is additional randomized adventurer gear generated and stored on chain. Maximum supply is dynamic, increasing at 1/10th of Ethereum's block rate. Stats, images, and other functionality are intentionally omitted for others to interpret. Feel free to use More Loot in any way you want.",
          image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIiAvPjx0ZXh0IHg9IjEwIiB5PSIyMCIgY2xhc3M9ImJhc2UiPkJvbmUgV2FuZCBvZiBGdXJ5PC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI0MCIgY2xhc3M9ImJhc2UiPiJTb3Jyb3cgUGVhayIgT3JuYXRlIENoZXN0cGxhdGUgb2YgUG93ZXIgKzE8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjYwIiBjbGFzcz0iYmFzZSI+RHJhZ29uJ3MgQ3Jvd24gb2YgR2lhbnRzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI4MCIgY2xhc3M9ImJhc2UiPkxpbmVuIFNhc2g8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjEwMCIgY2xhc3M9ImJhc2UiPk9ybmF0ZSBHcmVhdmVzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSIxMjAiIGNsYXNzPSJiYXNlIj5EcmFnb25za2luIEdsb3ZlczwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTQwIiBjbGFzcz0iYmFzZSI+TmVja2xhY2Ugb2YgUmVmbGVjdGlvbjwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTYwIiBjbGFzcz0iYmFzZSI+VGl0YW5pdW0gUmluZzwvdGV4dD48L3N2Zz4="
      },
      tokenUri: {
          raw: "data:application/json;base64,eyJuYW1lIjogIkJhZyAjMTMxNjIwIiwgImRlc2NyaXB0aW9uIjogIk1vcmUgTG9vdCBpcyBhZGRpdGlvbmFsIHJhbmRvbWl6ZWQgYWR2ZW50dXJlciBnZWFyIGdlbmVyYXRlZCBhbmQgc3RvcmVkIG9uIGNoYWluLiBNYXhpbXVtIHN1cHBseSBpcyBkeW5hbWljLCBpbmNyZWFzaW5nIGF0IDEvMTB0aCBvZiBFdGhlcmV1bSdzIGJsb2NrIHJhdGUuIFN0YXRzLCBpbWFnZXMsIGFuZCBvdGhlciBmdW5jdGlvbmFsaXR5IGFyZSBpbnRlbnRpb25hbGx5IG9taXR0ZWQgZm9yIG90aGVycyB0byBpbnRlcnByZXQuIEZlZWwgZnJlZSB0byB1c2UgTW9yZSBMb290IGluIGFueSB3YXkgeW91IHdhbnQuIiwgImltYWdlIjogImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIQnlaWE5sY25abFFYTndaV04wVW1GMGFXODlJbmhOYVc1WlRXbHVJRzFsWlhRaUlIWnBaWGRDYjNnOUlqQWdNQ0F6TlRBZ016VXdJajQ4YzNSNWJHVStMbUpoYzJVZ2V5Qm1hV3hzT2lCM2FHbDBaVHNnWm05dWRDMW1ZVzFwYkhrNklITmxjbWxtT3lCbWIyNTBMWE5wZW1VNklERTBjSGc3SUgwOEwzTjBlV3hsUGp4eVpXTjBJSGRwWkhSb1BTSXhNREFsSWlCb1pXbG5hSFE5SWpFd01DVWlJR1pwYkd3OUltSnNZV05ySWlBdlBqeDBaWGgwSUhnOUlqRXdJaUI1UFNJeU1DSWdZMnhoYzNNOUltSmhjMlVpUGtKdmJtVWdWMkZ1WkNCdlppQkdkWEo1UEM5MFpYaDBQangwWlhoMElIZzlJakV3SWlCNVBTSTBNQ0lnWTJ4aGMzTTlJbUpoYzJVaVBpSlRiM0p5YjNjZ1VHVmhheUlnVDNKdVlYUmxJRU5vWlhOMGNHeGhkR1VnYjJZZ1VHOTNaWElnS3pFOEwzUmxlSFErUEhSbGVIUWdlRDBpTVRBaUlIazlJall3SWlCamJHRnpjejBpWW1GelpTSStSSEpoWjI5dUozTWdRM0p2ZDI0Z2IyWWdSMmxoYm5SelBDOTBaWGgwUGp4MFpYaDBJSGc5SWpFd0lpQjVQU0k0TUNJZ1kyeGhjM005SW1KaGMyVWlQa3hwYm1WdUlGTmhjMmc4TDNSbGVIUStQSFJsZUhRZ2VEMGlNVEFpSUhrOUlqRXdNQ0lnWTJ4aGMzTTlJbUpoYzJVaVBrOXlibUYwWlNCSGNtVmhkbVZ6UEM5MFpYaDBQangwWlhoMElIZzlJakV3SWlCNVBTSXhNakFpSUdOc1lYTnpQU0ppWVhObElqNUVjbUZuYjI1emEybHVJRWRzYjNabGN6d3ZkR1Y0ZEQ0OGRHVjRkQ0I0UFNJeE1DSWdlVDBpTVRRd0lpQmpiR0Z6Y3owaVltRnpaU0krVG1WamEyeGhZMlVnYjJZZ1VtVm1iR1ZqZEdsdmJqd3ZkR1Y0ZEQ0OGRHVjRkQ0I0UFNJeE1DSWdlVDBpTVRZd0lpQmpiR0Z6Y3owaVltRnpaU0krVkdsMFlXNXBkVzBnVW1sdVp6d3ZkR1Y0ZEQ0OEwzTjJaejQ9In0=",
          gateway: ""
      },
      media: [
          {
              raw: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIiAvPjx0ZXh0IHg9IjEwIiB5PSIyMCIgY2xhc3M9ImJhc2UiPkJvbmUgV2FuZCBvZiBGdXJ5PC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI0MCIgY2xhc3M9ImJhc2UiPiJTb3Jyb3cgUGVhayIgT3JuYXRlIENoZXN0cGxhdGUgb2YgUG93ZXIgKzE8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjYwIiBjbGFzcz0iYmFzZSI+RHJhZ29uJ3MgQ3Jvd24gb2YgR2lhbnRzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI4MCIgY2xhc3M9ImJhc2UiPkxpbmVuIFNhc2g8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjEwMCIgY2xhc3M9ImJhc2UiPk9ybmF0ZSBHcmVhdmVzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSIxMjAiIGNsYXNzPSJiYXNlIj5EcmFnb25za2luIEdsb3ZlczwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTQwIiBjbGFzcz0iYmFzZSI+TmVja2xhY2Ugb2YgUmVmbGVjdGlvbjwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTYwIiBjbGFzcz0iYmFzZSI+VGl0YW5pdW0gUmluZzwvdGV4dD48L3N2Zz4=",
              gateway: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaW5ZTWluIG1lZXQiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIj48c3R5bGU+LmJhc2UgeyBmaWxsOiB3aGl0ZTsgZm9udC1mYW1pbHk6IHNlcmlmOyBmb250LXNpemU6IDE0cHg7IH08L3N0eWxlPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9ImJsYWNrIiAvPjx0ZXh0IHg9IjEwIiB5PSIyMCIgY2xhc3M9ImJhc2UiPkJvbmUgV2FuZCBvZiBGdXJ5PC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI0MCIgY2xhc3M9ImJhc2UiPiJTb3Jyb3cgUGVhayIgT3JuYXRlIENoZXN0cGxhdGUgb2YgUG93ZXIgKzE8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjYwIiBjbGFzcz0iYmFzZSI+RHJhZ29uJ3MgQ3Jvd24gb2YgR2lhbnRzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSI4MCIgY2xhc3M9ImJhc2UiPkxpbmVuIFNhc2g8L3RleHQ+PHRleHQgeD0iMTAiIHk9IjEwMCIgY2xhc3M9ImJhc2UiPk9ybmF0ZSBHcmVhdmVzPC90ZXh0Pjx0ZXh0IHg9IjEwIiB5PSIxMjAiIGNsYXNzPSJiYXNlIj5EcmFnb25za2luIEdsb3ZlczwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTQwIiBjbGFzcz0iYmFzZSI+TmVja2xhY2Ugb2YgUmVmbGVjdGlvbjwvdGV4dD48dGV4dCB4PSIxMCIgeT0iMTYwIiBjbGFzcz0iYmFzZSI+VGl0YW5pdW0gUmluZzwvdGV4dD48L3N2Zz4="
          }
      ],
      spamInfo: {
          isSpam: true,
          classifications: [
              "SingleTxErc721"
          ]
      },
      renting: {
          id: "228",
          cursor: 29,
          renterAddress: "0x9f60699ce23f1ab86ec3e095b477ff79d4f409ad",
          rentDuration: "1"
      }
  },
  {
      __typename: "Lending",
      id: "243",
      cursor: 243,
      nftAddress: "0x495f947276749ce646f68ac8c248420045cb7b5e",
      tokenId: "84648356769715030695676335807661616466538390719625467077587089019306206298113",
      nftPrice: 65536,
      dailyRentPrice: 65536,
      collateralClaimed: false,
      lenderAddress: "0xff8afdac75954d212f309c090f502f10f6256034",
      paymentToken: "4",
      lentAt: "1636564639",
      lentAmount: "1",
      type: NftEntityType.RENTING,
      assetUrl: "https://lh3.googleusercontent.com/aCppZ8qNPIWAWmS3kyAQfeMnKVhEUiZDLEi_3QausclZfX_GxekbZrAtugNjih7R4VL-nycAAw0tEWf0nNcfw9D_1pZwHjEGSCcnGA",
      paymentTokenName: "USDC",
      contract: {
          address: "0x495f947276749ce646f68ac8c248420045cb7b5e",
          name: "OpenSea Shared Storefront",
          symbol: "OPENSTORE",
          tokenType: "ERC1155"
      },
      tokenType: "ERC1155",
      title: "FreedomPunks#78",
      description: "Not specified",
      timeLastUpdated: "2022-05-18T04:33:12.531Z",
      rawMetadata: {
          name: "FreedomPunks#78",
          image: "https://lh3.googleusercontent.com/aCppZ8qNPIWAWmS3kyAQfeMnKVhEUiZDLEi_3QausclZfX_GxekbZrAtugNjih7R4VL-nycAAw0tEWf0nNcfw9D_1pZwHjEGSCcnGA"
      },
      tokenUri: {
          raw: "https://api.opensea.io/api/v1/metadata/0x495f947276749Ce646f68AC8c248420045cb7b5e/0x{id}",
          gateway: "https://api.opensea.io/api/v1/metadata/0x495f947276749ce646f68ac8c248420045cb7b5e/84648356769715030695676335807661616466538390719625467077587089019306206298113"
      },
      media: [
          {
              raw: "https://lh3.googleusercontent.com/aCppZ8qNPIWAWmS3kyAQfeMnKVhEUiZDLEi_3QausclZfX_GxekbZrAtugNjih7R4VL-nycAAw0tEWf0nNcfw9D_1pZwHjEGSCcnGA",
              gateway: "https://lh3.googleusercontent.com/aCppZ8qNPIWAWmS3kyAQfeMnKVhEUiZDLEi_3QausclZfX_GxekbZrAtugNjih7R4VL-nycAAw0tEWf0nNcfw9D_1pZwHjEGSCcnGA"
          }
      ],
      renting: {
          id: "243",
          cursor: 41,
          renterAddress: "0xbbb897330075943e95d562f0562be379009261d7",
          rentDuration: "1"
      }
  }
];

export default nfts;
