export type AtelierCategory = 'Necklaces' | 'Pendants' | 'Earrings' | 'Rings' | 'Chains & Bracelets' | 'Mangalsutras' | 'Waist Ornaments' | 'Devotional Ornaments';
export interface AtelierImage { src: string; label: string; kind: 'edited' | 'worn'; }
export interface AtelierPiece {
  id: string;
  title: string;
  category: AtelierCategory;
  description: string;
  image: string;
  images: AtelierImage[];
  featured: boolean;
}
export const atelierPieces: AtelierPiece[] = [
  {
    "id": "floral-peacock",
    "title": "Floral Peacock Pendant",
    "category": "Pendants",
    "description": "Openwork birds and floral scrolls frame coloured accents and a pale-bead fringe. The model preview pairs the pendant with a cream pearl chain.",
    "image": "/images/handmade/edits/floral-peacock.webp",
    "images": [
      {
        "src": "/images/handmade/edits/floral-peacock.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/floral-peacock.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": true
  },
  {
    "id": "crescent-jhumka",
    "title": "Floral Crescent Jhumka",
    "category": "Earrings",
    "description": "A floral top, green-accent crescent and detailed bell drop. The model preview features one earring.",
    "image": "/images/handmade/edits/crescent-jhumka.webp",
    "images": [
      {
        "src": "/images/handmade/edits/crescent-jhumka.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/crescent-jhumka.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": true
  },
  {
    "id": "green-floral-strands",
    "title": "Green Floral Strands",
    "category": "Necklaces",
    "description": "Five leafy floral stations joined by three delicate strands of pale beads.",
    "image": "/images/handmade/edits/green-floral-strands.webp",
    "images": [
      {
        "src": "/images/handmade/edits/green-floral-strands.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/green-floral-strands.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": true
  },
  {
    "id": "rectangular-deity-ring",
    "title": "Devotional Statement Ring",
    "category": "Rings",
    "description": "A rectangular devotional relief with coloured details and a clear-stone border.",
    "image": "/images/handmade/edits/rectangular-deity-ring.webp",
    "images": [
      {
        "src": "/images/handmade/edits/rectangular-deity-ring.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/rectangular-deity-ring.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": true
  },
  {
    "id": "filigree-bead-necklace",
    "title": "Filigree & Bead Necklace",
    "category": "Necklaces",
    "description": "Pale beads, decorative caps and openwork spheres joined into a short strand.",
    "image": "/images/handmade/edits/filigree-bead-necklace.webp",
    "images": [
      {
        "src": "/images/handmade/edits/filigree-bead-necklace.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/filigree-bead-necklace.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": true
  },
  {
    "id": "oval-devotional-pendant",
    "title": "Islamic Devotional Ornament",
    "category": "Devotional Ornaments",
    "description": "An Islamic devotional ornament with an architectural motif, arched canopy and rounded border details. Presented as a standalone ornament; please enquire about its dimensions and intended use.",
    "image": "/images/handmade/edits/oval-devotional-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/oval-devotional-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      }
    ],
    "featured": true
  },
  {
    "id": "bead-fringe-pendant",
    "title": "Devotional Bead-Fringe Pendant",
    "category": "Pendants",
    "description": "An embossed oval devotional motif finished with small pale-bead clusters, styled on a smooth round gold chain in the model preview.",
    "image": "/images/handmade/edits/bead-fringe-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/bead-fringe-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/bead-fringe-pendant.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "engraved-drops",
    "title": "Small Round Mangalsutra Pair",
    "category": "Mangalsutras",
    "description": "Two small round mangalsutra pieces with faceted details and rounded beads, styled together at the centre of a black-bead chain.",
    "image": "/images/handmade/edits/engraved-drops.webp",
    "images": [
      {
        "src": "/images/handmade/edits/engraved-drops.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/engraved-drops.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "ganesha-ring",
    "title": "Ganesha Relief Ring",
    "category": "Rings",
    "description": "An embossed Ganesha motif on a rectangular face with patterned shoulders.",
    "image": "/images/handmade/edits/ganesha-ring.webp",
    "images": [
      {
        "src": "/images/handmade/edits/ganesha-ring.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/ganesha-ring.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "silver-tone-deity-ring",
    "title": "Silver-Tone Devotional Ring",
    "category": "Rings",
    "description": "A rectangular devotional relief with a bright silver-coloured finish and stepped shoulders. Metal specification on enquiry.",
    "image": "/images/handmade/edits/silver-tone-deity-ring.webp",
    "images": [
      {
        "src": "/images/handmade/edits/silver-tone-deity-ring.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/silver-tone-deity-ring.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "coin-necklace",
    "title": "Heritage Coin Vaddanam",
    "category": "Waist Ornaments",
    "description": "A traditional waist ornament with nine graduated devotional coins and coloured accents, styled around the waist over a sari.",
    "image": "/images/handmade/edits/coin-necklace.webp",
    "images": [
      {
        "src": "/images/handmade/edits/coin-necklace.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/coin-necklace.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "devotional-chain",
    "title": "Devotional Multi-Strand Chain",
    "category": "Chains & Bracelets",
    "description": "Fine linked strands meet an embossed central devotional connector.",
    "image": "/images/handmade/edits/devotional-chain.webp",
    "images": [
      {
        "src": "/images/handmade/edits/devotional-chain.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/devotional-chain.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "floral-link-chain",
    "title": "Floral-Detail Long Chain",
    "category": "Chains & Bracelets",
    "description": "A double strand with an elongated floral connector and pink-toned accents.",
    "image": "/images/handmade/edits/floral-link-chain.webp",
    "images": [
      {
        "src": "/images/handmade/edits/floral-link-chain.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/floral-link-chain.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "engraved-disc-pair",
    "title": "Engraved Disc Mangalsutra Pair",
    "category": "Mangalsutras",
    "description": "A pair of small gold mangalsutra discs with engraved borders and raised centres, styled together on a black-bead chain. Purity and specifications are available on enquiry.",
    "image": "/images/handmade/edits/engraved-disc-pair-v2.webp",
    "images": [
      {
        "src": "/images/handmade/edits/engraved-disc-pair-v2.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/engraved-disc-pair.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "floral-scroll-pendant",
    "title": "Pale Oval-Bead Necklace",
    "category": "Necklaces",
    "description": "Pale oval beads joined by fine gold-coloured links, with a single orange-red accent bead.",
    "image": "/images/handmade/edits/floral-scroll-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/floral-scroll-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/floral-scroll-pendant.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "fan-lattice-ornament",
    "title": "Fan Pendant & Earring Set",
    "category": "Pendants",
    "description": "A fan-shaped pendant with pale-bead swags and two matching bell-shaped earrings. The model preview uses a substantial gold chain to complement the pendant.",
    "image": "/images/handmade/edits/fan-lattice-ornament.webp",
    "images": [
      {
        "src": "/images/handmade/edits/fan-lattice-ornament.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/fan-lattice-ornament.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "red-bead-strands",
    "title": "Red Bead Necklace",
    "category": "Necklaces",
    "description": "A slender necklace of elongated red beads alternating with small gold-coloured beads and links.",
    "image": "/images/handmade/edits/red-bead-strands.webp",
    "images": [
      {
        "src": "/images/handmade/edits/red-bead-strands.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/red-bead-strands.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "round-bead-chain",
    "title": "Round Bead Chain",
    "category": "Chains & Bracelets",
    "description": "Lustrous pale-yellow spherical beads with decorative gold-coloured spacers and fine links.",
    "image": "/images/handmade/edits/round-bead-chain.webp",
    "images": [
      {
        "src": "/images/handmade/edits/round-bead-chain.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/round-bead-chain.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "multicolour-bead-chain",
    "title": "Multicolour Bead Chain",
    "category": "Necklaces",
    "description": "Two rows of coloured beads with decorative gold-coloured spacers.",
    "image": "/images/handmade/edits/multicolour-bead-chain.webp",
    "images": [
      {
        "src": "/images/handmade/edits/multicolour-bead-chain.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/multicolour-bead-chain.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "teardrop-bead-necklace",
    "title": "Red Teardrop Bead Necklace",
    "category": "Necklaces",
    "description": "A long pale-bead strand finished with a red-toned teardrop centre.",
    "image": "/images/handmade/edits/teardrop-bead-necklace.webp",
    "images": [
      {
        "src": "/images/handmade/edits/teardrop-bead-necklace.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/teardrop-bead-necklace.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "black-bead-chain",
    "title": "Black Bead Chain",
    "category": "Chains & Bracelets",
    "description": "Black beads and decorative caps form a slender linked strand, finished with pale beads, a red accent and a black bead drop. Shown with a black shirt in the model preview.",
    "image": "/images/handmade/edits/black-bead-chain.webp",
    "images": [
      {
        "src": "/images/handmade/edits/black-bead-chain.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/black-bead-chain.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "emblem-signet",
    "title": "Faceted Emblem Signet",
    "category": "Rings",
    "description": "A faceted signet face with a raised emblem and patterned shoulders.",
    "image": "/images/handmade/edits/emblem-signet.webp",
    "images": [
      {
        "src": "/images/handmade/edits/emblem-signet.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/emblem-signet.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "personalised-signet",
    "title": "Raised-Motif Signet Ring",
    "category": "Rings",
    "description": "A raised central motif on a faceted signet face, with patterned shoulders.",
    "image": "/images/handmade/edits/personalised-signet.webp",
    "images": [
      {
        "src": "/images/handmade/edits/personalised-signet.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/personalised-signet.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "link-bracelets",
    "title": "Handmade Link Collection",
    "category": "Chains & Bracelets",
    "description": "A workshop selection of bright silver-coloured linked designs. Ask us about individual patterns and materials. The model view features the fourth-row bracelet with a long oval link alternating with three short links.",
    "image": "/images/handmade/edits/link-bracelets.webp",
    "images": [
      {
        "src": "/images/handmade/edits/link-bracelets.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/link-bracelets.webp",
        "label": "AI model preview · selected bracelet",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "small-devotional-pendant",
    "title": "Small Devotional Pendant",
    "category": "Pendants",
    "description": "A compact embossed devotional motif with a fine border and rolled bail. The model preview shows a small pendant and matching gold chain over a child’s festive kurta; dimensions and fit are confirmed personally.",
    "image": "/images/handmade/edits/small-devotional-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/small-devotional-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/small-devotional-pendant.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "traditional-disc-pendant",
    "title": "Traditional Disc Pendant",
    "category": "Pendants",
    "description": "A domed traditional disc with a rounded central boss, fine border and decorated top attachment, styled on a substantial round gold chain.",
    "image": "/images/handmade/edits/traditional-disc-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/traditional-disc-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/traditional-disc-pendant.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "leaf-pendant",
    "title": "Traditional Mangalsutra Leaf Pendant",
    "category": "Pendants",
    "description": "A traditional mangalsutra leaf pendant with raised dot details, a central boss and a wide rolled bail, styled on a substantial round gold chain. The AI shape and finish preview proposes a smoother outline; please confirm the final shape and finish with our workshop.",
    "image": "/images/handmade/edits/leaf-pendant-v2.webp",
    "images": [
      {
        "src": "/images/handmade/edits/leaf-pendant-v2.webp",
        "label": "AI shape & finish preview",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/leaf-pendant.webp",
        "label": "AI model preview",
        "kind": "worn"
      }
    ],
    "featured": false
  },
  {
    "id": "disc-ornament-selection",
    "title": "Engraved Gold Disc Pendant Selection",
    "category": "Pendants",
    "description": "Six gold disc pendants in three paired designs, with top bails and floral or devotional raised centres. The workshop has confirmed the gold colour; purity and specifications are available on enquiry. The model view features the top-left floral disc only.",
    "image": "/images/handmade/edits/disc-ornament-selection-v2.webp",
    "images": [
      {
        "src": "/images/handmade/edits/disc-ornament-selection-v2.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/worn-v8/disc-ornament-selection.webp",
        "label": "AI model preview · selected floral disc",
        "kind": "worn"
      }
    ],
    "featured": false
  }
];
export function getAtelierWhatsAppLink(piece: AtelierPiece) {
  const message = `Hi DAIVIQUE, I’m interested in ${piece.title} (ref: ${piece.id}). Please confirm materials, availability and a current quote.\n${getAtelierPageUrl(piece)}`;
  return `https://wa.me/917661916097?text=${encodeURIComponent(message)}`;
}

export function getAtelierPageUrl(piece: AtelierPiece) {
  return `https://daivique-jewels-landin-mj9x.bolt.host/share/work/${encodeURIComponent(piece.id)}.html`;
}

