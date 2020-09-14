import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slide from '@material-ui/core/Slide';
import makeStyles from '@material-ui/core/styles/makeStyles';
import ErrorMessage from 'components/Shared/ErrorMessage';
import TextField from 'components/Shared/Fields/Text';
import Toast from 'components/Shared/Toast';
import { logError } from 'helpers/rxjs-operators/logError';
import { useFormikObservable } from 'hooks/useFormikObservable';
import ICustomer from 'interfaces/models/customer';
import React, { forwardRef, Fragment, memo, useCallback } from 'react';
import { useRetryableObservable } from 'react-use-observable';
import { tap } from 'rxjs/operators';
import customerService from 'services/customer';
import * as yup from 'yup';

interface IProps {
    opened: boolean;
    customer?: ICustomer;
    onComplete: (customer: ICustomer) => void;
    onCancel: () => void;
}

const validationSchema = yup.object().shape({
    firstName: yup.string().required().min(3).max(50),
    lastName: yup.string().required().min(3).max(50),
    federalDoc: yup.string().required().min(11).max(14),
    email: yup.string().required().email().max(150),
    roles: yup.array().required().min(1)
});

const useStyle = makeStyles({
    content: {
        width: 600,
        maxWidth: 'calc(95vw - 50px)'
    },
    heading: {
        marginTop: 20,
        marginBottom: 10
    }
});

const FormDialog = memo((props: IProps) => {
    const classes = useStyle(props);

    const formik = useFormikObservable<ICustomer>({
        initialValues: { roles: [] },
        validationSchema,
        onSubmit(model) {
            return customerService.save(model).pipe(
                tap(customer => {
                    Toast.show(`${customer.firstName} foi salvo${model.id ? '' : ', um email foi enviado com a senha'}`);
                    props.onComplete(customer);
                }),
                logError(true)
            );
        }
    });

    const [roles, rolesError, , retryRoles] = useRetryableObservable(() => {
        return customerService.roles().pipe(logError());
    }, []);

    const handleEnter = useCallback(() => {
        formik.setValues(props.customer ?? formik.initialValues, false);
    }, [formik, props.customer]);

    const handleExit = useCallback(() => {
        formik.resetForm();
    }, [formik]);

    return (
        <Dialog
            open={props.opened}
            disableBackdropClick
            disableEscapeKeyDown
            onEnter={handleEnter}
            onExited={handleExit}
            TransitionComponent={Transition}
        >
            {formik.isSubmitting && <LinearProgress color='primary' />}

            <form onSubmit={formik.handleSubmit}>
                <DialogTitle>{formik.values.id ? 'Editar' : 'Novo'} Cliente</DialogTitle>
                <DialogContent className={classes.content}>
                    {rolesError && <ErrorMessage error={rolesError} tryAgain={retryRoles} />}

                    {!rolesError && (
                        <Fragment>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='Nome' name='firstName' formik={formik} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField label='Sobrenome' name='lastName' formik={formik} />
                                </Grid>
                            </Grid>

                            <TextField label='Email' name='email' type='email' formik={formik} />


                        </Fragment>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.onCancel}>Cancelar</Button>
                    <Button color='primary' variant='contained' type='submit' disabled={formik.isSubmitting || !roles}>
                        Salvar
          </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
});

const Transition = memo(
    forwardRef((props: any, ref: any) => {
        return <Slide direction='up' {...props} ref={ref} />;
    })
);

export default FormDialog;
