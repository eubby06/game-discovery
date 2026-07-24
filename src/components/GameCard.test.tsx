import { it, expect, describe } from 'vitest'
import {render, screen} from '@testing-library/react'
import GameCard from './GameCard'

describe('GameCard', () => {
    it('should display information of the game', () => {
        const game = {
            id: 1, 
            name: 'test game', 
            background_image: 'test-image', 
            rating: 10, 
            description: 'test description', 
            platforms: [{
                platform: {
                    name: 'test platform', slug: 'test slug'
                }
            }] 
        }

        render(<GameCard game={game}/>);

        const heading = screen.getByRole('heading', { level: 2 });

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent(/test game/i);

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'test-image');
    })
})