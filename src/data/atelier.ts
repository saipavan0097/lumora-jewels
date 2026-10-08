export type AtelierCategory = 'Necklaces' | 'Pendants' | 'Earrings' | 'Rings' | 'Chains & Bracelets';
export interface AtelierImage { src: string; label: string; kind: 'edited' | 'original'; }
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
    "description": "Openwork birds and floral scrolls frame coloured accents and a pale-bead fringe.",
    "image": "/images/handmade/edits/floral-peacock.webp",
    "images": [
      {
        "src": "/images/handmade/edits/floral-peacock.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/originals/64.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/59.webp",
        "label": "Original · view 2",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/168.webp",
        "label": "Original · view 3",
        "kind": "original"
      }
    ],
    "featured": true
  },
  {
    "id": "crescent-jhumka",
    "title": "Floral Crescent Jhumka",
    "category": "Earrings",
    "description": "A floral top, green-accent crescent and detailed bell drop. One earring is shown in the workshop photograph.",
    "image": "/images/handmade/edits/crescent-jhumka.webp",
    "images": [
      {
        "src": "/images/handmade/edits/crescent-jhumka.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/originals/206.webp",
        "label": "Original workshop photo",
        "kind": "original"
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
        "src": "/images/handmade/originals/191.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/192.webp",
        "label": "Original · view 2",
        "kind": "original"
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
        "src": "/images/handmade/originals/35.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/36.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": true
  },
  {
    "id": "filigree-bead-necklace",
    "title": "Filigree & Bead Necklace",
    "category": "Necklaces",
    "description": "Large pale beads, decorative caps and openwork spheres joined into a short strand.",
    "image": "/images/handmade/edits/filigree-bead-necklace.webp",
    "images": [
      {
        "src": "/images/handmade/edits/filigree-bead-necklace.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/originals/188.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": true
  },
  {
    "id": "oval-devotional-pendant",
    "title": "Temple Relief Pendant",
    "category": "Pendants",
    "description": "A sculpted temple-inspired centre, arched canopy and a border of rounded drops.",
    "image": "/images/handmade/edits/oval-devotional-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/oval-devotional-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/originals/81.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/77.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": true
  },
  {
    "id": "bead-fringe-pendant",
    "title": "Devotional Bead-Fringe Pendant",
    "category": "Pendants",
    "description": "An embossed oval motif finished with small pale-bead clusters.",
    "image": "/images/handmade/edits/bead-fringe-pendant.webp",
    "images": [
      {
        "src": "/images/handmade/edits/bead-fringe-pendant.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/originals/107.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/105.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "engraved-drops",
    "title": "Engraved Round Drops",
    "category": "Earrings",
    "description": "A pair of small hooked earrings with faceted circular drops and rounded bead details.",
    "image": "/images/handmade/edits/engraved-drops.webp",
    "images": [
      {
        "src": "/images/handmade/edits/engraved-drops.webp",
        "label": "AI studio edit",
        "kind": "edited"
      },
      {
        "src": "/images/handmade/originals/182.webp",
        "label": "Original workshop photo",
        "kind": "original"
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
        "src": "/images/handmade/originals/38.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/37.webp",
        "label": "Original · view 2",
        "kind": "original"
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
        "src": "/images/handmade/originals/140.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/141.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "coin-necklace",
    "title": "Heritage Coin Necklace",
    "category": "Necklaces",
    "description": "A row of engraved devotional coins with alternating coloured accents, photographed in its presentation box.",
    "image": "/images/handmade/originals/39.webp",
    "images": [
      {
        "src": "/images/handmade/originals/39.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/1.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "devotional-chain",
    "title": "Devotional Multi-Strand Chain",
    "category": "Chains & Bracelets",
    "description": "Fine linked strands meet an embossed central devotional connector.",
    "image": "/images/handmade/originals/12.webp",
    "images": [
      {
        "src": "/images/handmade/originals/12.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/13.webp",
        "label": "Original · view 2",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/92.webp",
        "label": "Original · view 3",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "floral-link-chain",
    "title": "Floral-Detail Long Chain",
    "category": "Chains & Bracelets",
    "description": "A double strand with an elongated floral connector and pink-toned accents.",
    "image": "/images/handmade/originals/16.webp",
    "images": [
      {
        "src": "/images/handmade/originals/16.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/17.webp",
        "label": "Original · view 2",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/93.webp",
        "label": "Original · view 3",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "engraved-disc-pair",
    "title": "Engraved Disc Pair",
    "category": "Earrings",
    "description": "Circular engraved ornaments with geometric borders and raised central details.",
    "image": "/images/handmade/originals/31.webp",
    "images": [
      {
        "src": "/images/handmade/originals/31.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/30.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "floral-scroll-pendant",
    "title": "Floral Scroll Pendant",
    "category": "Pendants",
    "description": "A sweeping openwork design with clear accents and intricate leaf-like scrolls.",
    "image": "/images/handmade/originals/133.webp",
    "images": [
      {
        "src": "/images/handmade/originals/133.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/134.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "fan-lattice-ornament",
    "title": "Fan & Bead-Lattice Ornament",
    "category": "Pendants",
    "description": "A sculpted fan silhouette with suspended rows of tiny bead details.",
    "image": "/images/handmade/originals/138.webp",
    "images": [
      {
        "src": "/images/handmade/originals/138.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "red-bead-strands",
    "title": "Red Bead Strands",
    "category": "Necklaces",
    "description": "Fine red-bead strands assembled by hand, shown on the workbench.",
    "image": "/images/handmade/originals/108.webp",
    "images": [
      {
        "src": "/images/handmade/originals/108.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/109.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "round-bead-chain",
    "title": "Round Bead Chain",
    "category": "Chains & Bracelets",
    "description": "A delicate strand of small gold-coloured spherical beads and fine links.",
    "image": "/images/handmade/originals/187.webp",
    "images": [
      {
        "src": "/images/handmade/originals/187.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "multicolour-bead-chain",
    "title": "Multicolour Bead Chain",
    "category": "Necklaces",
    "description": "Two rows of coloured beads with decorative gold-coloured spacers.",
    "image": "/images/handmade/originals/186.webp",
    "images": [
      {
        "src": "/images/handmade/originals/186.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "teardrop-bead-necklace",
    "title": "Red Teardrop Bead Necklace",
    "category": "Necklaces",
    "description": "A long pale-bead strand finished with a red-toned teardrop centre.",
    "image": "/images/handmade/originals/193.webp",
    "images": [
      {
        "src": "/images/handmade/originals/193.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "black-bead-chain",
    "title": "Black Bead Chain",
    "category": "Chains & Bracelets",
    "description": "Black beads and decorative caps form a slender linked strand.",
    "image": "/images/handmade/originals/190.webp",
    "images": [
      {
        "src": "/images/handmade/originals/190.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "emblem-signet",
    "title": "Faceted Emblem Signet",
    "category": "Rings",
    "description": "A faceted signet face with a raised emblem and patterned shoulders.",
    "image": "/images/handmade/originals/153.webp",
    "images": [
      {
        "src": "/images/handmade/originals/153.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/154.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "personalised-signet",
    "title": "Personalised Signet Ring",
    "category": "Rings",
    "description": "A sculpted personalised motif on a polished signet face, with alternate workshop angles.",
    "image": "/images/handmade/originals/156.webp",
    "images": [
      {
        "src": "/images/handmade/originals/156.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/159.webp",
        "label": "Original · view 2",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/158.webp",
        "label": "Original · view 3",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "link-bracelets",
    "title": "Handmade Link Collection",
    "category": "Chains & Bracelets",
    "description": "A workshop selection of bright silver-coloured linked designs. Ask us about individual patterns and materials.",
    "image": "/images/handmade/originals/145.webp",
    "images": [
      {
        "src": "/images/handmade/originals/145.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/143.webp",
        "label": "Original · view 2",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/144.webp",
        "label": "Original · view 3",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "small-devotional-pendant",
    "title": "Small Devotional Pendant",
    "category": "Pendants",
    "description": "A compact embossed devotional motif, photographed from the front and reverse.",
    "image": "/images/handmade/originals/170.webp",
    "images": [
      {
        "src": "/images/handmade/originals/170.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/171.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "traditional-disc-pendant",
    "title": "Traditional Disc Pendant",
    "category": "Pendants",
    "description": "A round traditional pendant with an engraved surface and the original photographed finish.",
    "image": "/images/handmade/originals/185.webp",
    "images": [
      {
        "src": "/images/handmade/originals/185.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "leaf-pendant",
    "title": "Traditional Leaf Pendant",
    "category": "Pendants",
    "description": "A leaf-shaped traditional pendant on a yellow cord, shown in its original workshop condition.",
    "image": "/images/handmade/originals/195.webp",
    "images": [
      {
        "src": "/images/handmade/originals/195.webp",
        "label": "Original workshop photo",
        "kind": "original"
      }
    ],
    "featured": false
  },
  {
    "id": "disc-ornament-selection",
    "title": "Engraved Disc Selection",
    "category": "Earrings",
    "description": "A small workshop selection of round decorative ornaments with embossed centres.",
    "image": "/images/handmade/originals/161.webp",
    "images": [
      {
        "src": "/images/handmade/originals/161.webp",
        "label": "Original workshop photo",
        "kind": "original"
      },
      {
        "src": "/images/handmade/originals/162.webp",
        "label": "Original · view 2",
        "kind": "original"
      }
    ],
    "featured": false
  }
];
export function getAtelierWhatsAppLink(piece: AtelierPiece) {
  const message = `Hi DAIVIQUE, I would like to enquire about ${piece.title} (reference: ${piece.id}). Please share the material details, availability and current quote.`;
  return `https://wa.me/917661930097?text=${encodeURIComponent(message)}`;
}

