const defaultConfigs = {
    CONTINUOUS_GRADIENTS: {
        gc_count: 100,
        gc_size: 3,
        step_size: 1,
        step_num: 8000,
        x_step_possibility: 0.55,
        y_step_possibility: 0.50,
        sigmoid_gain: 4,
        sigmoid_shift: 3,
        sigmoid_height: 1,
        sigma: 0.12,
        force: false,
        forward_sig: true,
        reverse_sig: true,
        ff_inter: true,
        ft_inter: true,
        adaptation_enabled: true,
        adaptation_mu: 0.01,
        adaptation_lambda: 0.0045,
        adaptation_history: 50,
        substrate_type: 'CONTINUOUS_GRADIENTS',
        rows: 100,
        cols: 100,
        continuous_signal_start: 0.01,
        continuous_signal_end: 6.99
    },
    WEDGES: {
        gc_count: 10,
        gc_size: 10,
        step_size: 1,
        step_num: 8000,
        x_step_possibility: 0.55,
        y_step_possibility: 0.50,
        sigmoid_gain: 4,
        sigmoid_shift: 3,
        sigmoid_height: 1,
        sigma: 0.12,
        force: false,
        forward_sig: true,
        reverse_sig: true,
        ff_inter: true,
        ft_inter: true,
        adaptation_enabled: false,
        adaptation_mu: 0.01,
        adaptation_lambda: 0.0045,
        adaptation_history: 50,
        substrate_type: 'WEDGES',
        rows: 96,
        cols: 96,
        wedge_narrow_edge: 1,
        wedge_wide_edge: 12
    },
    STRIPE: {
        gc_count: 10,
        gc_size: 10,
        step_size: 1,
        step_num: 8000,
        x_step_possibility: 0.55,
        y_step_possibility: 0.50,
        sigmoid_gain: 4,
        sigmoid_shift: 3,
        sigmoid_height: 1,
        sigma: 0.12,
        force: false,
        forward_sig: true,
        reverse_sig: true,
        ff_inter: true,
        ft_inter: true,
        adaptation_enabled: false,
        adaptation_mu: 0.01,
        adaptation_lambda: 0.0045,
        adaptation_history: 50,
        substrate_type: 'STRIPE',
        rows: 150,
        cols: 150,
        stripe_fwd: true,
        stripe_rew: true,
        stripe_conc: 1,
        stripe_width: 12
    },
    GAP: {
        gc_count: 5,
        gc_size: 5,
        step_size: 2,
        step_num: 8000,
        x_step_possibility: 0.55,
        y_step_possibility: 0.50,
        sigmoid_gain: 4,
        sigmoid_shift: 3,
        sigmoid_height: 1,
        sigma: 0.12,
        force: false,
        forward_sig: true,
        reverse_sig: true,
        ff_inter: true,
        ft_inter: true,
        adaptation_enabled: true,
        adaptation_mu: 0.01,
        adaptation_lambda: 0.0045,
        adaptation_history: 50,
        substrate_type: 'GAP',
        rows: 96,
        cols: 96,
        gap_begin: 0.5,
        gap_end: 0.1,
        gap_first_block: 'ligand',
        gap_second_block: 'receptor'
    }
};
