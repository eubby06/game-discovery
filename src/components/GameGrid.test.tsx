import {render, screen} from '@testing-library/react'
import { it, expect, describe, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import GameGrid from './GameGrid'
import ApiClient from '../services/api-client'

describe('GameGrid', () => {
    it('shows 9 skeletons while loading', () => {
        // keep the promise pending so the component stays in loading state
        vi.spyOn(ApiClient, 'get').mockImplementation(() => new Promise(() => {})) as any;

        render(
            <MemoryRouter>
                <GameGrid />
            </MemoryRouter>
        );

        const skeletons = screen.getAllByTestId('game-card');
        expect(skeletons.length).toBe(9);
    })
})