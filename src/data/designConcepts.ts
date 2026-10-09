import { calculateMetalEstimate, pricingBenchmark, type MetalKey } from '@/data/pricing';

export type ConceptGoldMetal = Extract<MetalKey, 'gold22k' | 'gold18k'>;

export interface DesignConcept {
  id: string;
  title: string;
  category: string;
  description: string;
  inspiration: string;
  image: string;
  proposedNetMetalBudget: {
    minimumGrams: number;
    maximumGrams: number;
    scope: string;
  };
}

export const designConcepts: DesignConcept[] = [
  {
    id: 'petal-disc-pendant',
    title: 'Petal Disc Pendant',
    category: 'Pendant idea',
    description: 'A small scalloped disc with a simple openwork petal pattern and a plain hanging loop.',
    inspiration: 'Inspired by the openwork and floral details in our workshop pieces.',
    image: '/images/handmade/concepts/petal-disc-pendant.webp',
    proposedNetMetalBudget: { minimumGrams: 2, maximumGrams: 3, scope: 'Pendant only · chain not included' },
  },
  {
    id: 'twin-leaf-ring',
    title: 'Twin Leaf Ring',
    category: 'Ring idea',
    description: 'Two gently curved leaf details meet above a smooth, simple band.',
    inspiration: 'Inspired by the leaf and floral motifs in our handmade ornaments.',
    image: '/images/handmade/concepts/twin-leaf-ring.webp',
    proposedNetMetalBudget: { minimumGrams: 3, maximumGrams: 4, scope: 'One ring · final size to be agreed' },
  },
  {
    id: 'mini-bead-drops',
    title: 'Mini Bead Drops',
    category: 'Earring idea',
    description: 'A pair of small round drops with restrained engraved detail and a single bead below each.',
    inspiration: 'Inspired by our engraved round ornaments and suspended bead details.',
    image: '/images/handmade/concepts/mini-bead-drops.webp',
    proposedNetMetalBudget: { minimumGrams: 3, maximumGrams: 4, scope: 'Total for the pair · not per earring' },
  },
  {
    id: 'oval-link-bracelet',
    title: 'Oval Link Bracelet',
    category: 'Bracelet idea',
    description: 'An understated bracelet of rounded oval links, with the fit and closure chosen during design review.',
    inspiration: 'Inspired by the linked construction in our handmade chains.',
    image: '/images/handmade/concepts/oval-link-bracelet.webp',
    proposedNetMetalBudget: { minimumGrams: 8, maximumGrams: 10, scope: 'One bracelet · length and closure to be agreed' },
  },
  {
    id: 'leaf-thali-mangalsutra',
    title: 'Leaf Thali Mangalsutra',
    category: 'Mangalsutra idea',
    description: 'A single black-bead chain with a small, smooth leaf thali and restrained raised-dot details. No gemstones are proposed.',
    inspiration: 'Inspired by our traditional leaf pendant; the chain, proportions and finish are a new design concept for workshop review.',
    image: '/images/handmade/concepts/leaf-thali-mangalsutra.webp',
    proposedNetMetalBudget: { minimumGrams: 6, maximumGrams: 8, scope: 'Full necklace · net gold only, excluding black beads · unapproved planning budget' },
  },
  {
    id: 'twin-disc-mangalsutra',
    title: 'Twin Disc Mangalsutra',
    category: 'Mangalsutra idea',
    description: 'Two modest, matching engraved round gold disc pendants on a single black-bead chain. No gemstones are proposed.',
    inspiration: 'Inspired by our paired engraved disc ornaments; size, chain length and construction need workshop approval.',
    image: '/images/handmade/concepts/twin-disc-mangalsutra.webp',
    proposedNetMetalBudget: { minimumGrams: 8, maximumGrams: 10, scope: 'Full necklace · both pendants and chain gold included · net gold only, excluding black beads · unapproved planning budget' },
  },
  {
    id: 'floral-disc-mangalsutra',
    title: 'Floral Disc Mangalsutra',
    category: 'Mangalsutra idea',
    description: 'A small scalloped floral disc pendant on a single black-bead chain, with simple engraved detail and no gemstones.',
    inspiration: 'Inspired by the floral centres in our gold disc pendants; this proposed design has not yet been made or approved by the workshop.',
    image: '/images/handmade/concepts/floral-disc-mangalsutra.webp',
    proposedNetMetalBudget: { minimumGrams: 6, maximumGrams: 8, scope: 'Full necklace · net gold only, excluding black beads · unapproved planning budget' },
  },
];

export function getDesignConceptBudgetRange(concept: DesignConcept, metal: ConceptGoldMetal, rates?: Record<MetalKey, number>) {
  const { minimumGrams, maximumGrams } = concept.proposedNetMetalBudget;
  return {
    low: calculateMetalEstimate({ metal, netMetalWeightGrams: minimumGrams, hasStones: false, ratePerGram: rates?.[metal] }),
    high: calculateMetalEstimate({ metal, netMetalWeightGrams: maximumGrams, hasStones: false, ratePerGram: rates?.[metal] }),
  };
}

export function getDesignConceptWhatsAppLink(concept: DesignConcept, metal: ConceptGoldMetal = 'gold22k') {
  const message = `Hi DAIVIQUE, I’d like to discuss ${concept.title} in ${pricingBenchmark.metals[metal].label} (ref: ${concept.id}). AI concept, not yet made. Please confirm feasibility, net metal weight and a current quote.\n${getDesignConceptPageUrl(concept)}`;
  return `https://wa.me/917661930097?text=${encodeURIComponent(message)}`;
}

export function getDesignConceptPageUrl(concept: DesignConcept) {
  return `https://daivique-jewels-landin-mj9x.bolt.host/share/concepts/${encodeURIComponent(concept.id)}.html`;
}
